
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '@/components/LandingPage';
import QuizPage from '@/components/QuizPage';
import ResultsPage from '@/components/ResultsPage';
import WaitlistForm from '@/components/WaitlistForm';
import TermsPage from '@/components/TermsPage';
import { Button } from '@/components/ui/button';

type QuizState = 'landing' | 'quiz' | 'results' | 'waitlist' | 'terms';

const Index = () => {
  const [currentState, setCurrentState] = useState<QuizState>('landing');
  const [personalityResult, setPersonalityResult] = useState<string>('');

  const handleStartQuiz = () => {
    setCurrentState('quiz');
    setPersonalityResult('');
  };

  const handleQuizComplete = (result: string) => {
    setPersonalityResult(result);
    setCurrentState('results');
  };

  const handleJoinWaitlist = () => {
    setCurrentState('waitlist');
  };

  const handleWaitlistSubmit = () => {
    setCurrentState('landing');
  };

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="transition-all duration-500 ease-in-out" style={{ backgroundColor: '#0a0a0a' }}>
        {currentState === 'landing' && (
          <LandingPage onStartQuiz={handleStartQuiz} />
        )}
        {currentState === 'quiz' && (
          <QuizPage onQuizComplete={handleQuizComplete} />
        )}
        {currentState === 'results' && (
          <ResultsPage score={personalityResult} onJoinWaitlist={handleJoinWaitlist} />
        )}
        {currentState === 'waitlist' && (
          <WaitlistForm onSubmit={handleWaitlistSubmit} />
        )}
      </div>
    </div>
  );
};

export default Index;
