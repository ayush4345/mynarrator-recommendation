import { cn } from '@/lib/utils';

interface LandingPageProps {
  onStartQuiz: () => void;
}

const LandingPage = ({ onStartQuiz }: LandingPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden" style={{ backgroundColor: '#121212' }}>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full py-6 px-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">MY NARRATIVE</h1>
        </div>
        <div>
          <p className="text-[#4CAF50] font-medium">WEAR YOUR PERSONALITY</p>
        </div>
      </div>
      
      <div className='w-full md:w-3/4 flex flex-col items-center md:items-start justify-center gap-10 min-h-screen overflow-hidden text-white px-4'>
        {/* Green accent element */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#4CAF50] opacity-20"></div>
        
        {/* Main content */}
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold mb-6 uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-white">Discover your narrative</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">Find your personality trait and get personalized narrative recommendations that match who you are.</p>
          <div className='z-20'>
            <button
              onClick={onStartQuiz}
              className="px-10 py-4 cursor-pointer z-20 font-semibold uppercase bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white rounded-md shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 text-lg tracking-wider">
              Take the Quiz
            </button>
          </div>
        </div>
      </div>
      
      {/* Green accent border at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4CAF50] to-white"></div>
    </div>
  );
};

export default LandingPage;
