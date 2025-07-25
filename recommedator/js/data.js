// Quiz Questions
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
  },
  {
    id: 8,
    question: "If your weekend had a theme-song music video, what would it look like?",
    options: [
      { label: "A. Dust-kicking ATV races through canyons", points: "Road Royalty / The Mindful Adventurer" },
      { label: "B. A neon-lit hackathon montage", points: "Technologist on Toes / Wanna Be Unicorn" },
      { label: "C. A caffeine-fueled café montage with latte art slow-mo", points: "Surviving on Caffeine / The Modern Influencer" },
      { label: "D. A gritty gym montage intercut with shuttle smashes", points: "Gym & Fitness Freak / Shuttler's Arena" },
      { label: "E. A high-stakes trading floor with ticker-tape confetti", points: "Genetically Finoholic" },
      { label: "F. A shadowy film-noir chase through rain-slicked streets", points: "Mysterious & Hot / Bumbling My Life" },
      { label: "G. A dance-battle flashmob in a warehouse rave", points: "Live to Dance / Music Therapy" },
      { label: "H. A sarcastic stand-up routine at an empty comedy club", points: "The Sarcastic Rizzler / The Modern Influencer" },
      { label: "I. A battlefield-style first-aid tent under mortar fire", points: "Medico on Duty / Armed Patriot" },
      { label: "J. A pastel art-studio time-lapse of a canvas explosion", points: "Born Artist / The Sarcastic Rizzler" }
    ]
  }
];

// Personality Trait Mapping
const personalityTraitMapping = {
  // Predominantly A answers
  A: ["Adventurous Spirit", "Spontaneous Go-Getter", "Independent Pioneer"],
  // Predominantly B answers
  B: ["Reflective Mind", "Passionate Dreamer", "Knowledge Seeker"],
  // Predominantly C answers
  C: ["Community Connector", "Empathetic Heart", "Loyal Advocate"],
  // Predominantly D answers
  D: ["Goal-Chaser", "Calm Strategist", "Future Architect"],
};

// Narrative Recommendations Mapping
const personalityNarrativeMapping = {
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

// Personality Exemplars Mapping
const personalityExemplarMapping = {
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

// Emoji Mapping for Personality Traits
const emojiMapping = {
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
