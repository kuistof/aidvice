import React from 'react';
import { OnboardingQuestion, AnswerOption } from '../../config/typeformOnboardingQuestions';
import { ArrowRight } from 'lucide-react';

interface QuestionSlideProps {
  question: OnboardingQuestion;
  onAnswer: (questionId: string, answer: AnswerOption, category: OnboardingQuestion['categoryForScore']) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuestionSlide: React.FC<QuestionSlideProps> = ({ question, onAnswer, currentQuestionIndex, totalQuestions }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10 text-center">
      <div className="max-w-2xl w-full">
        <p className="text-accent font-semibold mb-2">
          Frage {currentQuestionIndex + 1} von {totalQuestions}
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-3 whitespace-pre-line">
          {question.title}
        </h1>
        {question.subtitle && (
          <p className="text-neutral-600 mb-8 md:mb-12 text-sm sm:text-base whitespace-pre-line">
            {question.subtitle}
          </p>
        )}
        <div className="space-y-3 md:space-y-4 w-full">
          {question.answerOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onAnswer(question.id, option, question.categoryForScore)}
              className="w-full text-left p-4 md:p-5 bg-white border border-neutral-300 rounded-xl shadow-soft hover:border-accent hover:bg-accent-light/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 ease-in-out transform active:scale-[0.98] group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-3 md:mr-4 border border-neutral-400 group-hover:border-accent text-neutral-500 group-hover:text-accent text-xs sm:text-sm font-semibold w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-md transition-colors">
                    {option.id}
                  </span>
                  <span className="text-sm sm:text-base text-neutral-700 group-hover:text-neutral-900">
                    {option.text}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionSlide; 