import React from 'react';
import { Lightbulb } from 'lucide-react'; // Example icon

interface NextStepRecommendationCardProps {
  recommendationTitle?: string;
  recommendationText?: string;
  // This would eventually take onboardingData or userState as props to generate dynamic recommendations
}

const NextStepRecommendationCard: React.FC<NextStepRecommendationCardProps> = ({
  recommendationTitle = "Focus on Your Sales Process",
  recommendationText = "Based on your input, refining your sales process could significantly boost your revenue. Consider mapping out your current customer journey and identifying bottlenecks."
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-soft h-full flex flex-col">
      <div className="flex items-center mb-4">
        <Lightbulb className="h-7 w-7 text-accent mr-3" />
        <h3 className="text-xl font-semibold text-neutral-800">Next Strategic Step</h3>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium text-neutral-700 mb-1">{recommendationTitle}</h4>
        <p className="text-sm text-neutral-600 leading-relaxed">
          {recommendationText}
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center justify-between">
        <p className="text-xs text-neutral-500">AI Generated Suggestion</p>
        <button 
          className="text-sm text-accent hover:text-accent-dark font-medium focus:outline-none"
        >
          Explore Options &rarr;
        </button>
      </div>
    </div>
  );
};

export default NextStepRecommendationCard; 