import React from 'react';
import { CheckCircle, Circle, Zap, TrendingUp, Target, Rocket, Award } from 'lucide-react'; // Example icons
import { BusinessPhase } from './CurrentPhaseDisplay'; // Re-using the type

interface Milestone {
  phase: BusinessPhase;
  icon: React.ElementType;
  isCompleted: boolean;
  isCurrent: boolean;
}

const milestonesConfig: BusinessPhase[] = ["Idea", "Foundation", "Growth", "Scale", "Optimize"];

const phaseIcons: Record<BusinessPhase, React.ElementType> = {
  Idea: Zap,
  Foundation: Target,
  Growth: TrendingUp,
  Scale: Rocket,
  Optimize: Award,
};

interface MilestoneTrackerProps {
  currentPhase: BusinessPhase;
  // completedPhases?: BusinessPhase[]; // Could be used to explicitly mark completed phases
}

const MilestoneTracker: React.FC<MilestoneTrackerProps> = ({ currentPhase }) => {
  const currentPhaseIndex = milestonesConfig.indexOf(currentPhase);

  const milestones: Milestone[] = milestonesConfig.map((phase, index) => ({
    phase,
    icon: phaseIcons[phase],
    isCompleted: index < currentPhaseIndex,
    isCurrent: index === currentPhaseIndex,
  }));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-soft h-full">
      <h3 className="text-lg font-semibold text-neutral-700 mb-6">Your Journey Milestones</h3>
      <div className="relative flex items-center justify-between w-full">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-accent -translate-y-1/2 z-0 transition-all duration-500 ease-out"
          style={{ width: `${(currentPhaseIndex / (milestonesConfig.length -1 )) * 100}%` }}
        ></div>

        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          let iconColor = "text-neutral-400";
          if (milestone.isCompleted) iconColor = "text-accent";
          if (milestone.isCurrent) iconColor = "text-accent-dark";

          return (
            <div key={milestone.phase} className="flex flex-col items-center z-10 relative">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                            ${milestone.isCompleted || milestone.isCurrent ? 'border-accent bg-accent-light' : 'border-neutral-300 bg-white'}
                            ${milestone.isCurrent ? 'ring-2 ring-accent-dark ring-offset-2' : ''}`}
              >
                {milestone.isCompleted && !milestone.isCurrent ? 
                  <CheckCircle className={`h-6 w-6 ${iconColor}`} /> : 
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                }
              </div>
              <span 
                className={`mt-2 text-xs font-medium 
                            ${milestone.isCompleted || milestone.isCurrent ? 'text-neutral-700' : 'text-neutral-500'}
                            ${milestone.isCurrent ? 'text-accent-dark' : ''}`}
              >
                {milestone.phase}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-neutral-500 mt-6 text-center">
        Track your progress through key business development stages.
      </p>
    </div>
  );
};

export default MilestoneTracker; 