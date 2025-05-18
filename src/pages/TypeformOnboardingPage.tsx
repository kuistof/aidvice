import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming react-router-dom is used for navigation
import { onboardingQuestions, UserStage, AnswerOption, OnboardingQuestion as QuestionType } from '../config/typeformOnboardingQuestions';
import QuestionSlide from '../components/typeform-onboarding/QuestionSlide';
import { ChevronLeft } from 'lucide-react';
import { useUserProgress } from '../hooks/useUserProgress'; // Import the hook

const TypeformOnboardingPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<UserStage>>({});
  const [animationClass, setAnimationClass] = useState('animate-fadeIn'); // For slide transitions
  const navigate = useNavigate();
  const { saveUserProgress } = useUserProgress(); // Use the hook

  const totalQuestions = onboardingQuestions.length;

  const handleAnswer = (questionId: string, answer: AnswerOption, category: QuestionType['categoryForScore']) => {
    setAnimationClass('animate-fadeOut');
    
    // Update local `answers` state immediately for the current session
    const updatedAnswers = { ...answers };
    if (category === 'headcount' || category === 'revenue') {
      updatedAnswers[category] = answer.text;
    } else {
      updatedAnswers[category] = answer.score;
    }
    setAnswers(updatedAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setAnimationClass('animate-fadeIn');
      } else {
        // Onboarding complete
        localStorage.setItem('onboardingCompleted_v2', 'true');
        // Save the final accumulated answers using the hook
        saveUserProgress(updatedAnswers as UserStage); 
        console.log("Final User Stage Data saved:", updatedAnswers);
        navigate('/dashboard');
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setAnimationClass('animate-fadeOutReverse'); // Assuming a reverse animation class
      setTimeout(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        // Remove the answer for the question we are going back from
        const questionToRevert = onboardingQuestions[currentQuestionIndex];
        setAnswers(prev => {
          const newAnswers = {...prev};
          delete newAnswers[questionToRevert.categoryForScore];
          return newAnswers;
        });
        setAnimationClass('animate-fadeInReverse'); // Assuming a reverse animation class
      }, 300);
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="h-screen w-screen bg-neutral-100 flex flex-col overflow-hidden">
      {/* Progress Bar & Back Button */}
      <div className="fixed top-0 left-0 right-0 z-10 p-4 bg-neutral-100">
        <div className="flex items-center max-w-2xl mx-auto">
          {currentQuestionIndex > 0 && (
            <button 
              onClick={handleBack}
              className="p-2 mr-2 text-neutral-600 hover:text-neutral-800 rounded-full hover:bg-neutral-200 transition-colors"
              aria-label="Zurück"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden flex-grow">
            <div 
              className="bg-accent h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Slide Area - Applying animation classes */}
      <div className={`flex-grow flex items-center justify-center transition-opacity duration-300 ease-in-out ${animationClass} pt-16`}>
        {onboardingQuestions[currentQuestionIndex] && (
          <QuestionSlide 
            key={currentQuestionIndex} // Ensures component re-renders for animations
            question={onboardingQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
          />
        )}
      </div>
      
      {/* Footer/Branding - Optional */}
       <footer className="py-4 text-center">
        <p className="text-xs text-neutral-500">Powered by Your Business Advisor</p>
      </footer>
    </div>
  );
};

export default TypeformOnboardingPage; 