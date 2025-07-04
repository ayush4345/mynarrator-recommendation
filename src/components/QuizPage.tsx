
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface QuizPageProps {
  onQuizComplete: (personalityTrait: string, ceoAnswer: string, interestAnswer: string) => void;
}

const questions = [
  {
    id: 1,
    question: "Pick your ideal Friday night:",
    options: [
      { label: "A. Out exploring a new spot with friends", points: "A" },
      { label: "B. Binge-watching your favorite show at home", points: "B" },
      { label: "C. Trying a fun hobby or class", points: "C" },
      { label: "D. Planning next week's to-dos", points: "D" }
    ]
  },
  {
    id: 2,
    question: "Your go-to weekend activity is:",
    options: [
      { label: "A. Hiking, sports or anything active", points: "A" },
      { label: "B. Reading, drawing or a solo craft", points: "B" },
      { label: "C. Hanging out with family or pals", points: "C" },
      { label: "D. Organizing your workspace or calendar", points: "D" }
    ]
  },
  {
    id: 3,
    question: "When you have free time right now, you:",
    options: [
      { label: "A. Sign up for something new and exciting", points: "A" },
      { label: "B. Work on a personal side project", points: "B" },
      { label: "C. Call up a friend to catch up", points: "C" },
      { label: "D. Make a plan and set goals", points: "D" }
    ]
  },
  {
    id: 4,
    question: "Before making a big choice you usually:",
    options: [
      { label: "A. Trust your gut and dive in", points: "A" },
      { label: "B. Think it through quietly", points: "B" },
      { label: "C. Ask your crew for advice", points: "C" },
      { label: "D. List pros & cons in writing", points: "D" }
    ]
  },
  {
    id: 5,
    question: "What feels most fun to you?",
    options: [
      { label: "A. Taking a spontaneous risk", points: "A" },
      { label: "B. Mastering a new skill", points: "B" },
      { label: "C. Bringing people together", points: "C" },
      { label: "D. Plotting out a clear roadmap", points: "D" }
    ]
  },
  {
    id: 6,
    question: "If you could (sarcastically) run any \"company\" based on your secret hobby, which absurd CEO title would you rock?",
    options: [
      { label: "A. the Emergency Dance-Floor Patrol", points: "Dancer / The Mindful Adventurer" },
      { label: "B. Guitar-Solo Karaoke Nights", points: "Music / The Modern Influencer" },
      { label: "C. the Plush-Toy Diagnosis Department", points: "Medical Pro / Bumbling My Life" },
      { label: "D. Sneaky Ninja Security Solutions", points: "Armed Defense Pro / The Shuttlers" },
      { label: "E. the Abstract Finger-Painting Institute", points: "Artist / Mysterious & Hot" },
      { label: "F. Candy-Futures Trading LLC", points: "Trader / Wanna Be Unicorn" },
      { label: "G. Expert Eye-Roll Consultancy", points: "Sarcasm / The Sarcastic Rizzler" },
      { label: "H. the Pro-Level Couch Gaming League", points: "Gamer by Profession" },
      { label: "I. Home-Brew Beer Hangover Management", points: "Friday Night Beer" },
      { label: "J. GPS-Optional Road Trips Inc.", points: "Road Royalty / The Mindful Adventurer" },
      { label: "K. Fuel-Injected Coffee Addiction Co.", points: "Surviving on Caffeine" },
      { label: "L. Extreme Sweat-Equity Gyms", points: "Gym & Fitness Freak" },
      { label: "M. Hashtag Manipulation Technologies", points: "The Modern Influencer" },
      { label: "N. Imaginary Unicorn Startup Factory", points: "Wanna Be Unicorn / Technologist on Toes" },
      { label: "O. AI-Generated Job Titles Unlimited", points: "Technologist on Toes" }
    ]
  },
  {
    id: 7,
    question: "What are you most passionate about? (Select your top interest)",
    options: [
      { label: "1. Off-Road Riding & Road Trips", points: "Road Royalty / The Mindful Adventurer" },
      { label: "2. Mindful Travel & Solo Retreats", points: "The Mindful Adventurer / Bumbling My Life" },
      { label: "3. Coffee Culture & Café Hopping", points: "Surviving on Caffeine / The Modern Influencer" },
      { label: "4. Gym Workouts & Fitness Challenges", points: "Gym & Fitness Freak / The Ultimate Husband Material" },
      { label: "5. Gaming & eSports Tournaments", points: "Gamer by Profession / Technologist on Toes" },
      { label: "6. Startup Culture & Unicorn Hunting", points: "Wanna Be Unicorn / Technologist on Toes" },
      { label: "7. Social Media & Influencer Trends", points: "The Modern Influencer / The Shuttlers" },
      { label: "8. Sardonic Humor & Memes", points: "The Sarcastic Rizzler / Bumbling My Life" },
      { label: "9. Craft Cocktails & Nightlife", points: "Friday Night Beer / The Modern Influencer" },
      { label: "10. Mystery Novels & Film Noir", points: "Mysterious & Hot / Bumbling My Life" },
      { label: "11. Every-day Anecdotes & Journaling", points: "Bumbling My Life / The Mindful Adventurer" },
      { label: "12. Tech Gadgets & Wearables", points: "Technologist on Toes / Wanna Be Unicorn" },
      { label: "13. Community Events & Pop-Up Meetups", points: "The Shuttlers / The Modern Influencer" },
      { label: "14. Choreography & Freestyle Dancing", points: "Dancer / The Mindful Adventurer" },
      { label: "15. Beat-Making & Underground DJ Nights", points: "Music / The Modern Influencer" },
      { label: "16. First-Aid Drills & Medical Role-Play", points: "Medical Pro / Bumbling My Life" },
      { label: "17. Tactical Gear Collecting & Strategy Sim Games", points: "Armed Defense Pro / The Shuttlers" },
      { label: "18. Urban Sketching & Pop-Up Art Jams", points: "Artist / Mysterious & Hot" },
      { label: "19. Paper-Trading & Market Prediction Challenges", points: "Trader / Wanna Be Unicorn" }
    ]
  }
];

// Mapping of answer patterns to personality traits
const personalityTraitMapping: Record<string, string[]> = {
  // Predominantly A answers
  A: ["Adventurous Spirit", "Spontaneous Go-Getter", "Independent Pioneer"],
  // Predominantly B answers
  B: ["Reflective Mind", "Passionate Dreamer", "Knowledge Seeker"],
  // Predominantly C answers
  C: ["Community Connector", "Empathetic Heart", "Loyal Advocate"],
  // Predominantly D answers
  D: ["Goal-Chaser", "Calm Strategist", "Future Architect"],
};

const QuizPage = ({ onQuizComplete }: QuizPageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (points: string, index: number) => {
    setSelectedOption(index);
    
    // Update answers with the selected option
    const newAnswers = { ...answers, [currentQuestion]: points };
    setAnswers(newAnswers);
    
    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Calculate personality result
        calculateResult(newAnswers);
      }
    }, 500);
  };
  
  const calculateResult = (finalAnswers: Record<number, string>) => {
    // Separate the special questions' answers
    const ceoQuestionAnswer = finalAnswers[5]; // Question with id 6 is at index 5
    const interestQuestionAnswer = finalAnswers[6]; // Question with id 7 is at index 6
    
    // Process the first 5 questions (personality quiz)
    const personalityAnswers: Record<number, string> = {};
    for (let i = 0; i < 5; i++) {
      if (i in finalAnswers) {
        personalityAnswers[i] = finalAnswers[i];
      }
    }
    
    // Count the frequency of each answer type for personality questions
    const answerCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    
    Object.values(personalityAnswers).forEach((answer) => {
      if (answer in answerCounts) {
        answerCounts[answer]++;
      }
    });
    
    // Find the most frequent answer type
    let maxCount = 0;
    let dominantType = "";
    
    Object.entries(answerCounts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominantType = type;
      }
    });
    
    // Get potential personality traits based on dominant answer type
    const potentialTraits = personalityTraitMapping[dominantType] || [];
    
    // Select a random trait from the potential traits
    const personalityTrait = potentialTraits[Math.floor(Math.random() * potentialTraits.length)];
    
    // Pass the personality trait, CEO question answer, and interest answer to the ResultsPage
    onQuizComplete(personalityTrait, ceoQuestionAnswer || '', interestQuestionAnswer || '');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="h-screen flex flex-col justify-center px-6 max-w-2xl mx-auto relative" style={{ backgroundColor: '#000000' }}>
      {/* Animated background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff00ff] opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00bfff] opacity-10 blur-[100px]"></div>
      </div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm text-gray-300">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-800" indicatorClassName="bg-gradient-to-r from-[#ff00ff] to-[#00bfff]" />
      </div>

      {/* Question */}
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 shadow-[0_0_15px_rgba(255,0,255,0.3)]">
        <h2 className="text-2xl font-bold text-white mb-6">
          {questions[currentQuestion].question}
        </h2>

        {/* Options */}
        <div className={`space-y-3 ${currentQuestion === 5 || currentQuestion === 6 ? 'max-h-[60vh] overflow-y-auto pr-2' : ''}`}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option.points, index)}
              disabled={selectedOption !== null}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                selectedOption === index
                  ? 'border-[#00bfff] bg-gray-800 text-white shadow-[0_0_10px_rgba(0,191,255,0.5)]'
                  : selectedOption !== null
                  ? 'border-gray-700 opacity-50 cursor-not-allowed text-gray-400'
                  : 'border-gray-700 hover:border-[#ff00ff] hover:bg-gray-800 text-gray-300'
              }`}
            >
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
