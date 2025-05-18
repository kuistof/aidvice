import React from 'react';

interface ToggleSwitchProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  srText?: string; // Screen reader text for the toggle itself
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ id, label, checked, onChange, srText }) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-sm font-medium text-neutral-700">
        {label}
      </label>
      <button
        type="button"
        id={id}
        onClick={handleToggle}
        className={`${checked ? 'bg-accent' : 'bg-neutral-300'}
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
        role="switch"
        aria-checked={checked}
      >
        <span className="sr-only">{srText || label}</span>
        <span
          aria-hidden="true"
          className={`${checked ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
            transition duration-200 ease-in-out`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch; 