import { cn } from '@/lib/utils';

interface LandingPageProps {
  onStartQuiz: () => void;
}

const LandingPage = ({ onStartQuiz }: LandingPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className='w-3/4 flex flex-col items-start justify-center gap-10 min-h-screen overflow-hidden text-white'>
        <div
          className={cn(
            "absolute inset-0 overflow-hidden w-3/4 h-screen",
            "[background-size:40px_40px]",
            "[background-image:radial-gradient(#333333_1px,transparent_1px)]",
            "opacity-30"
          )}
        />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff00ff97] opacity-10 blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00bfff90] opacity-10 blur-[100px]"></div>
        </div>
        <p className="text-[104px] text-left z-20 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00bfff]">Discover your personality</p>
        <div className='z-20'>
          <button
            onClick={onStartQuiz}
            className="px-8 py-2 cursor-pointer z-20 font-semibold uppercase bg-gradient-to-r from-[#ff00ff] to-[#00bfff] text-white transition duration-200 text-2xl rounded-md hover:opacity-90 shadow-[0_0_15px_rgba(255,0,255,0.7)]">
            Take the Personality Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
