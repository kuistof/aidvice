import React from 'react';
import { BookOpen, MessageCircle, Edit3 } from 'lucide-react'; // Icons for Library, Assistant, Notes

interface QuickAccessButtonProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  className?: string;
}

const QuickAccessButton: React.FC<QuickAccessButtonProps> = ({ icon: Icon, label, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent group ${className}`}
    >
      <Icon className="h-8 w-8 text-neutral-600 group-hover:text-accent mb-2 transition-colors duration-150" />
      <span className="text-sm font-medium text-neutral-700 group-hover:text-accent-dark transition-colors duration-150">{label}</span>
    </button>
  );
};

interface QuickAccessToolsProps {
  onToggleAIAssistant: () => void;
}

const QuickAccessTools: React.FC<QuickAccessToolsProps> = ({ onToggleAIAssistant }) => {
  // Placeholder actions
  const handleOpenNotes = () => alert('Open Notes (not implemented yet)');
  const handleOpenLibrary = () => alert('Open Resource Library (not implemented yet)');
  // const handleAskAssistant = () => alert('Ask the AI Assistant (not implemented yet)'); // Replaced by prop

  return (
    <div className="bg-white p-6 rounded-2xl shadow-soft h-full">
      <h3 className="text-lg font-semibold text-neutral-700 mb-4">Quick Access</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <QuickAccessButton icon={Edit3} label="My Notes" onClick={handleOpenNotes} />
        <QuickAccessButton icon={BookOpen} label="Library" onClick={handleOpenLibrary} />
        <QuickAccessButton 
          icon={MessageCircle} 
          label="Assistant" 
          onClick={onToggleAIAssistant} // Use the passed prop
          className="sm:col-span-1" 
        />
      </div>
    </div>
  );
};

export default QuickAccessTools; 