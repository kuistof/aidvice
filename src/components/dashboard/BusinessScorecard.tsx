import React from 'react';
import { TrendingUp } from 'lucide-react'; // Example icon

interface BusinessScorecardProps {
  score?: number; // Example: 0-100
  title?: string;
}

const BusinessScorecard: React.FC<BusinessScorecardProps> = ({
  score = 75, // Default dummy score
  title = "Overall Business Score",
}) => {
  const circumference = 2 * Math.PI * 40; // Assuming radius of 40 for the circle
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-soft h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-neutral-700">{title}</h3>
          <TrendingUp className="h-6 w-6 text-green-500" />
        </div>
        <div className="flex items-center justify-center my-4">
          {/* Placeholder for a more complex chart - using a simple SVG circle for now */}
          <svg className="transform -rotate-90 w-32 h-32" viewBox="0 0 100 100">
            <circle 
              className="text-neutral-200" 
              strokeWidth="10" 
              stroke="currentColor" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50"
            />
            <circle 
              className="text-accent" 
              strokeWidth="10" 
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round" 
              stroke="currentColor" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50"
            />
          </svg>
          <span className="absolute text-3xl font-bold text-neutral-800">{score}%</span>
        </div>
      </div>
      <p className="text-sm text-neutral-500 text-center mt-auto">
        Based on your current progress and inputs.
      </p>
    </div>
  );
};

export default BusinessScorecard; 