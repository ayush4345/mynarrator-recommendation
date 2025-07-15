import React from 'react';
import { Button } from '@/components/ui/button';

interface ResultsPageProps {
  score: string;
  ceoAnswer: string;
  interestAnswer: string;
  onJoinWaitlist: () => void;
}

// Mapping of personality traits to narratives
const personalityNarrativeMapping: Record<string, string[]> = {
  "Adventurous Spirit": ["THE MINDFUL ADVENTURER", "ROAD ROYALTY"],
  "Reflective Mind": ["BUMBLING MY LIFE", "MYSTERIOUS & HOT"],
  "Community Connector": ["THE MODERN INFLUENCER", "THE SHUTTLERS", "SURVIVING ON CAFFEINE"],
  "Goal-Chaser": ["WANNA BE UNICORN", "GYM & FITNESS FREAK"],
  "Calm Strategist": ["SURVIVING ON CAFFEINE", "GYM & FITNESS FREAK"],
  "Passionate Dreamer": ["THE SARCASTIC RIZZLER", "MYSTERIOUS & HOT"],
  "Steady Anchor": ["THE ULTIMATE HUSBAND MATERIAL", "BUMBLING MY LIFE"],
  "Creative Visionary": ["TECHNOLOGIST ON TOES", "THE MODERN INFLUENCER"],
  "Spontaneous Go-Getter": ["FRIDAY NIGHT BEER", "ROAD ROYALTY"],
  "Empathetic Heart": ["BUMBLING MY LIFE", "THE MINDFUL ADVENTURER"],
  "Independent Pioneer": ["ROAD ROYALTY", "GAMER BY PROFESSION"],
  "Loyal Advocate": ["THE ULTIMATE HUSBAND MATERIAL", "THE SHUTTLERS"],
  "Future Architect": ["WANNA BE UNICORN", "TECHNOLOGIST ON TOES"],
  "Peacekeeper": ["THE MINDFUL ADVENTURER", "SURVIVING ON CAFFEINE"],
  "Knowledge Seeker": ["GAMER BY PROFESSION", "TECHNOLOGIST ON TOES"],
};

// Mapping of personality traits to exemplars
const personalityExemplarMapping: Record<string, {global: string[], indian: string}> = {
  "Adventurous Spirit": {
    global: ["Amelia Earhart", "Bear Grylls", "Sir Edmund Hillary"],
    indian: "Bachendri Pal"
  },
  "Reflective Mind": {
    global: ["Albert Einstein", "Carl Jung", "Virginia Woolf"],
    indian: "Rabindranath Tagore"
  },
  "Community Connector": {
    global: ["Oprah Winfrey", "Barack Obama", "Ellen DeGeneres"],
    indian: "Shah Rukh Khan"
  },
  "Goal-Chaser": {
    global: ["Serena Williams", "Tiger Woods", "Elon Musk"],
    indian: "P.V. Sindhu"
  },
  "Calm Strategist": {
    global: ["Mahatma Gandhi", "Angela Merkel", "Warren Buffett"],
    indian: "A.P.J. Abdul Kalam"
  },
  "Passionate Dreamer": {
    global: ["Walt Disney", "Frida Kahlo", "John Lennon"],
    indian: "A.R. Rahman"
  },
  "Steady Anchor": {
    global: ["Mother Teresa", "Fred Rogers", "Nelson Mandela"],
    indian: "Lata Mangeshkar"
  },
  "Creative Visionary": {
    global: ["Leonardo da Vinci", "Steve Jobs", "Pablo Picasso"],
    indian: "Satyajit Ray"
  },
  "Spontaneous Go-Getter": {
    global: ["Richard Branson", "Lady Gaga", "Madonna"],
    indian: "Virat Kohli"
  },
  "Empathetic Heart": {
    global: ["Princess Diana", "Dalai Lama", "Keanu Reeves"],
    indian: "Kailash Satyarthi"
  },
  "Independent Pioneer": {
    global: ["Marie Curie", "Rosa Parks", "Katherine Johnson"],
    indian: "Kalpana Chawla"
  },
  "Loyal Advocate": {
    global: ["Martin Luther King Jr.", "Ruth Bader Ginsburg", "Harriet Tubman"],
    indian: "Baba Amte"
  },
  "Future Architect": {
    global: ["Jeff Bezos", "Larry Page", "Sundar Pichai"],
    indian: "Mukesh Ambani"
  },
  "Peacekeeper": {
    global: ["Kofi Annan", "Desmond Tutu", "Ban Ki-moon"],
    indian: "Dalai Lama"
  },
  "Knowledge Seeker": {
    global: ["Carl Sagan", "Stephen Hawking", "Neil deGrasse Tyson"],
    indian: "C.V. Raman"
  },
};

const ResultsPage = ({ score, ceoAnswer, interestAnswer, onJoinWaitlist }: ResultsPageProps) => {
  // Add CSS for gradient text
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .text-gradient-pill {
        background: linear-gradient(90deg, #00bfff, #ff00ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  // Get narratives and exemplars for the personality trait
  const narratives = personalityNarrativeMapping[score] || [];
  const exemplars = personalityExemplarMapping[score] || { global: [], indian: "" };
  
  // Determine emoji based on personality trait
  const getEmoji = (trait: string) => {
    const emojiMap: Record<string, string> = {
      "Adventurous Spirit": "🧗‍♀️",
      "Reflective Mind": "🤔",
      "Community Connector": "👥",
      "Goal-Chaser": "🏆",
      "Calm Strategist": "🧠",
      "Passionate Dreamer": "✨",
      "Steady Anchor": "⚓",
      "Creative Visionary": "🎨",
      "Spontaneous Go-Getter": "🚀",
      "Empathetic Heart": "❤️",
      "Independent Pioneer": "🔍",
      "Loyal Advocate": "🛡️",
      "Future Architect": "🏗️",
      "Peacekeeper": "☮️",
      "Knowledge Seeker": "📚"
    };
    
    return emojiMap[trait] || "✨";
  };
  
  // Parse special answers for display
  const parseSpecialAnswer = (answer: string) => {
    if (!answer) return [];
    
    // If the answer contains multiple recommendations separated by '/', split them
    if (answer.includes('/')) {
      return answer.split('/').map(item => item.trim());
    }
    
    // Otherwise return as a single item array
    return [answer.trim()];
  };
  
  const ceoRecommendations = parseSpecialAnswer(ceoAnswer);
  const interestRecommendations = parseSpecialAnswer(interestAnswer);
  
  // Combine all recommendations and remove duplicates
  const getAllUniqueRecommendations = () => {
    // Start with narratives from personality trait
    const allRecommendations = [...narratives];
    
    // Add CEO recommendations
    if (ceoRecommendations) {
      allRecommendations.push(...ceoRecommendations);
    }
    
    // Add interest recommendations
    if (interestRecommendations) {
      allRecommendations.push(...interestRecommendations);
    }
    
    // Remove duplicates and empty strings
    return [...new Set(allRecommendations)].filter(rec => rec.toUpperCase().trim() !== '');
  };
  
  const uniqueRecommendations = getAllUniqueRecommendations();
  
  const resultData = {
    title: `YOUR PERSONALITY TRAIT: ${score.toUpperCase()}`,
    emoji: getEmoji(score),
    bgColor: "bg-[#4CAF50]",
    textColor: "text-white",
    subtext: "Based on your answers, we've identified your personality trait, secret CEO identity, and top interests. Check out the narratives that match your personality!"
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative" style={{ backgroundColor: '#121212' }}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-white mb-2">MY NARRATIVE</h1>
        <p className="text-[#4CAF50] text-lg font-medium">WEAR YOUR PERSONALITY</p>
      </div>
      
      {/* Green accent element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4CAF50] to-white"></div>
      
      {/* Personality Trait Display */}
      <div className="mb-8">
        <div className={`inline-flex items-center px-6 py-3 ${resultData.bgColor} ${resultData.textColor} text-lg font-semibold uppercase`}>
          <span className="text-2xl mr-2">{resultData.emoji}</span>
          {score.toUpperCase()}
        </div>
      </div>

      {/* Result Title */}
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-white mb-8 leading-tight max-w-3xl uppercase">
        {resultData.title}
      </h1>

      {/* Result Icon */}
      <div className="text-8xl mb-8">
        {resultData.emoji}
      </div>

      {/* Subtext */}
      <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
        {resultData.subtext}
      </p>

      {/* Combined Unique Recommendations */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-white uppercase">Your Recommended Narratives:</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {uniqueRecommendations.map((recommendation, index) => (
            <span key={index} className="bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white px-4 py-2 text-sm font-medium rounded-md shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 cursor-pointer">
              {recommendation.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Exemplars */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white uppercase">People with similar traits:</h3>
        <div className="bg-gray-800 p-4 border border-gray-700">
          <p className="text-gray-300 mb-2"><strong className="text-[#4CAF50]">Global Examples:</strong> {exemplars.global.join(", ")}</p>
          <p className="text-gray-300"><strong className="text-[#4CAF50]">Indian Example:</strong> {exemplars.indian}</p>
        </div>
      </div>
      
      {/* No retake quiz button as requested */}
    </div>
  );
};

export default ResultsPage;
