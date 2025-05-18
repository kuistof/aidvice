import React from 'react';
import ToggleSwitch from '../ui/ToggleSwitch'; // Assuming ToggleSwitch is in src/components/ui/

interface Step2Data {
  marketingStrategy?: boolean;
  salesProcess?: boolean;
}

interface Step2BusinessStatusProps {
  data: Step2Data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (field: keyof Step2Data, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Step2BusinessStatus: React.FC<Step2BusinessStatusProps> = ({ data, onChange, onNext, onPrev }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-neutral-800 mb-1">Business Details</h2>
      <p className="text-sm text-neutral-500 mb-6">Step 2: Current Status</p>

      <ToggleSwitch 
        id="marketingStrategy"
        label="Do you have a marketing strategy?"
        checked={!!data.marketingStrategy}
        onChange={(value) => onChange('marketingStrategy', value)}
      />

      <ToggleSwitch 
        id="salesProcess"
        label="Do you have a sales process?"
        checked={!!data.salesProcess}
        onChange={(value) => onChange('salesProcess', value)}
      />

      <div className="flex justify-between mt-8">
        <button 
          onClick={onPrev}
          className="bg-neutral-200 text-neutral-700 py-3 px-6 rounded-xl shadow-soft hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 transform active:scale-95 transition-transform duration-150 ease-in-out font-medium"
        >
          Previous
        </button>
        <button 
          onClick={onNext}
          className="bg-accent text-white py-3 px-6 rounded-xl shadow-soft hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50 transform active:scale-95 transition-transform duration-150 ease-in-out font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2BusinessStatus; 