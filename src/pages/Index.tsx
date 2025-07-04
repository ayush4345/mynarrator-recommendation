
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
  const [ceoAnswer, setCeoAnswer] = useState<string>('');
  const [interestAnswer, setInterestAnswer] = useState<string>('');

  const handleStartQuiz = () => {
    setCurrentState('quiz');
    setPersonalityResult('');
  };

  const handleQuizComplete = (personalityTrait: string, ceoAnswer: string, interestAnswer: string) => {
    setPersonalityResult(personalityTrait);
    setCeoAnswer(ceoAnswer);
    setInterestAnswer(interestAnswer);
    setCurrentState('results');
  };

  const handleJoinWaitlist = () => {
    setCurrentState('waitlist');
  };

  const handleWaitlistSubmit = () => {
    setCurrentState('landing');
  };

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="transition-all duration-500 ease-in-out" style={{ backgroundColor: '#000000' }}>
        {currentState === 'landing' && (
          <LandingPage onStartQuiz={handleStartQuiz} />
        )}
        {currentState === 'quiz' && (
          <QuizPage onQuizComplete={handleQuizComplete} />
        )}
        {currentState === 'results' && (
          <ResultsPage score={personalityResult} ceoAnswer={ceoAnswer} interestAnswer={interestAnswer} onJoinWaitlist={handleJoinWaitlist} />
        )}
        {currentState === 'waitlist' && (
          <WaitlistForm onSubmit={handleWaitlistSubmit} />
        )}
      </div>
    </div>
  );
};

export default Index;
