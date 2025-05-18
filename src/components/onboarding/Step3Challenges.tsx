import React from 'react';

interface Step3Data {
  mainChallenges?: string[];
}

interface Step3ChallengesProps {
  data: Step3Data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (field: keyof Step3Data, value: any) => void;
  onSubmit: () => void;
  onPrev: () => void;
}

const challengeOptions = [
  { id: 'leads', label: 'Too few leads' },
  { id: 'profit', label: 'Good revenue, but low profit' },
  { id: 'processes', label: 'Too many manual processes' },
  { id: 'hiring', label: 'Unsure how to hire/build a team' },
  { id: 'structure', label: 'Holding structure or taxes confusing' },
  { id: 'focus', label: 'Don\'t know what to focus on next' },
];

const Step3Challenges: React.FC<Step3ChallengesProps> = ({ data, onChange, onSubmit, onPrev }) => {
  const selectedChallenges = data.mainChallenges || [];

  const handleChallengeToggle = (challengeId: string) => {
    const newSelection = selectedChallenges.includes(challengeId)
      ? selectedChallenges.filter(c => c !== challengeId)
      : [...selectedChallenges, challengeId];
    onChange('mainChallenges', newSelection);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-neutral-800 mb-1">Main Challenges</h2>
      <p className="text-sm text-neutral-500 mb-6">Step 3: What are your primary focus areas right now?</p>

      <div className="space-y-3">
        {challengeOptions.map(option => (
          <label 
            key={option.id} 
            htmlFor={`challenge-${option.id}`}
            className="flex items-center p-3 border border-neutral-200 rounded-xl hover:border-accent-light cursor-pointer transition-colors duration-150 ease-in-out has-[:checked]:bg-accent-light has-[:checked]:border-accent"
          >
            <input 
              type="checkbox" 
              id={`challenge-${option.id}`}
              name="mainChallenges"
              value={option.id}
              checked={selectedChallenges.includes(option.id)}
              onChange={() => handleChallengeToggle(option.id)}
              className="h-4 w-4 text-accent border-neutral-300 rounded focus:ring-accent mr-3 shrink-0"
            />
            <span className="text-sm text-neutral-700">{option.label}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button 
          onClick={onPrev}
          className="bg-neutral-200 text-neutral-700 py-3 px-6 rounded-xl shadow-soft hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 transform active:scale-95 transition-transform duration-150 ease-in-out font-medium"
        >
          Previous
        </button>
        <button 
          onClick={onSubmit} 
          className="bg-green-500 text-white py-3 px-6 rounded-xl shadow-soft hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transform active:scale-95 transition-transform duration-150 ease-in-out font-medium"
        >
          Go to your Dashboard
        </button>
      </div>
    </div>
  );
};

export default Step3Challenges; 