import React, { useState, useEffect } from 'react';
import Topbar from '../components/dashboard/layout/Topbar';
import Sidebar from '../components/dashboard/layout/Sidebar';
import BusinessScorecard from '../components/dashboard/BusinessScorecard';
import CurrentPhaseDisplay, { BusinessPhase } from '../components/dashboard/CurrentPhaseDisplay';
import NextStepRecommendationCard from '../components/dashboard/NextStepRecommendationCard';
import QuickAccessTools from '../components/dashboard/QuickAccessTools';
import MilestoneTracker from '../components/dashboard/MilestoneTracker';
import LLMAssistantPanel from '../components/llm/LLMAssistantPanel';
import CategoryScores from '../components/dashboard/CategoryScores';
import { UserStage } from '../config/typeformOnboardingQuestions';

// Remove the placeholder for MilestoneTracker as it's now imported
// const MilestoneTracker = () => <div className="bg-white p-6 rounded-2xl shadow-soft">Milestone Tracker (Placeholder)</div>;

const DashboardPage: React.FC = () => {
  // Example phase, this would likely come from user data or calculations
  const userPhase: BusinessPhase = "Growth"; 
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [userStageData, setUserStageData] = useState<UserStage | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userStageData_v2');
    if (storedData) {
      setUserStageData(JSON.parse(storedData));
    }
  }, []);

  const toggleAIAssistant = () => {
    setIsAIAssistantOpen(!isAIAssistantOpen);
  };

  // Example data for LLM Panel context
  const lastUserProgress = "Completed Onboarding"; // This would be dynamic

  return (
    <div className="flex h-screen bg-neutral-100 font-sans">
      <Sidebar 
        onToggleAIAssistant={toggleAIAssistant} 
        isAIAssistantActive={isAIAssistantOpen} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-neutral-100 p-6 pt-20 md:pt-6 ml-64 transition-all duration-300 ease-in-out ${isAIAssistantOpen ? 'mr-0 md:mr-[calc(100vw-64px-20rem)] lg:mr-[calc(100vw-64px-24rem)]' : ''}`}>
          {/* Adjust pt-6 if Topbar height changes, and ml-64 if Sidebar width changes */}
          {/* The main content margin-right will be adjusted if the LLM panel pushes it. 
              However, for a true slide-over that doesn't affect main content layout, 
              the LLM panel would have a higher z-index and position fixed/absolute without pushing content.
              The current LLMAssistantPanel is designed as an overlay (fixed position, high z-index), so it won't push content directly.
              The margin adjustment here is more for a scenario where the panel *does* resize main content area, which is not the current LLM panel design.
              Removing the margin adjustment from main as LLMAssistantPanel is an overlay.
           */}
        {/* <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-neutral-100 p-6 pt-20 md:pt-6 ml-64`}> */}
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold text-neutral-800 mb-6">Dashboard</h1>
            
            {/* Grid layout for dashboard items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Business Scorecard */}
              <div className="lg:col-span-1 h-full">
                <BusinessScorecard score={75} />
              </div>
              
              {/* Current Phase Display */}
              <div className="lg:col-span-1 h-full">
                <CurrentPhaseDisplay phase={userPhase} />
              </div>

              {/* Category Scores - New Position */}
              <div className="md:col-span-2 lg:col-span-1 h-full">
                <CategoryScores userStageData={userStageData} />
              </div>

              {/* Next Step Recommendation - potentially larger */}
              <div className="md:col-span-2 lg:col-span-3 h-full">
                <NextStepRecommendationCard />
              </div>

              {/* Quick Access Tools */}
              <div className="h-full">
                <QuickAccessTools onToggleAIAssistant={toggleAIAssistant} />
              </div>

              {/* Milestone Tracker - potentially wider */}
              <div className="md:col-span-2 lg:col-span-2 h-full">
                <MilestoneTracker currentPhase={userPhase} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <LLMAssistantPanel 
        isOpen={isAIAssistantOpen} 
        onClose={toggleAIAssistant} 
        currentPhase={userPhase}
        lastProgress={lastUserProgress}
      />
    </div>
  );
};

export default DashboardPage; 