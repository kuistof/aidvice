import React from 'react';
import { Target } from 'lucide-react'; // Example icon

export type BusinessPhase = "Idea" | "Foundation" | "Growth" | "Scale" | "Optimize";

interface CurrentPhaseDisplayProps {
  phase: BusinessPhase;
}

const phaseConfig: Record<BusinessPhase, { color: string; bgColor: string; description: string }> = {
  Idea: { color: "text-purple-600", bgColor: "bg-purple-100", description: "Exploring and validating your business concept." },
  Foundation: { color: "text-sky-600", bgColor: "bg-sky-100", description: "Building the core of your business operations." },
  Growth: { color: "text-emerald-600", bgColor: "bg-emerald-100", description: "Expanding your market reach and customer base." },
  Scale: { color: "text-amber-600", bgColor: "bg-amber-100", description: "Systematizing processes for rapid expansion." },
  Optimize: { color: "text-rose-600", bgColor: "bg-rose-100", description: "Refining and improving for long-term efficiency." },
};

const CurrentPhaseDisplay: React.FC<CurrentPhaseDisplayProps> = ({ phase = "Foundation" }) => {
  const config = phaseConfig[phase];

  return (
    <div className={`p-6 rounded-2xl shadow-soft h-full flex flex-col ${config.bgColor}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-lg font-semibold ${config.color}`}>Current Phase</h3>
        <Target className={`h-6 w-6 ${config.color}`} />
      </div>
      <div className="text-center my-auto">
        <p className={`text-3xl font-bold ${config.color} mb-2`}>{phase}</p>
        <p className={`text-sm ${config.color} opacity-80 px-2`}>{config.description}</p>
      </div>
      <button 
        className={`mt-auto w-full ${config.color} ${config.bgColor.replace("bg-","hover:bg-").replace("100", "200")} border border-current py-2 px-4 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current transition-colors duration-150`}
      >
        Learn More About This Phase
      </button>
    </div>
  );
};

export default CurrentPhaseDisplay; 