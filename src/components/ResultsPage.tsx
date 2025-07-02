import React from 'react';
import { Button } from '@/components/ui/button';

interface ResultsPageProps {
  score: string;
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

const ResultsPage = ({ score, onJoinWaitlist }: ResultsPageProps) => {
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
  
  const resultData = {
    title: `Your Personality Trait: ${score}`,
    emoji: getEmoji(score),
    bgColor: "bg-gray-800",
    textColor: "text-[#00bfff]",
    subtext: "Based on your answers, we've identified your personality trait. Check out the narratives that match your personality!"
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center px-6 text-center relative" style={{ backgroundColor: '#000000' }}>
      {/* Animated background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff00ff] opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00bfff] opacity-10 blur-[100px]"></div>
      </div>
      {/* Personality Trait Display */}
      <div className="mb-8">
        <div className={`inline-flex items-center px-6 py-3 rounded-full ${resultData.bgColor} ${resultData.textColor} text-lg font-semibold`}>
          <span className="text-2xl mr-2">{resultData.emoji}</span>
          {score}
        </div>
      </div>

      {/* Result Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00bfff]">
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

      {/* Narratives */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-white">Your Recommended Narratives:</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {narratives.map((narrative, index) => (
            <span key={index} className="bg-gray-800 text-[#ff00ff] border border-gray-700 px-3 py-1 rounded-full text-sm shadow-[0_0_10px_rgba(255,0,255,0.3)]">
              {narrative}
            </span>
          ))}
        </div>
      </div>

      {/* Exemplars */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-white">People with similar traits:</h3>
        <p className="text-gray-300"><strong className="text-[#00bfff]">Global Examples:</strong> {exemplars.global.join(", ")}</p>
        <p className="text-gray-300"><strong className="text-[#00bfff]">Indian Example:</strong> {exemplars.indian}</p>
      </div>
    </div>
  );
};

export default ResultsPage;
