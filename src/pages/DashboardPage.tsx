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
import { Menu } from 'lucide-react'; // For mobile menu toggle

// Remove the placeholder for MilestoneTracker as it's now imported
// const MilestoneTracker = () => <div className="bg-white p-6 rounded-2xl shadow-soft">Milestone Tracker (Placeholder)</div>;

const DashboardPage: React.FC = () => {
  // Example phase, this would likely come from user data or calculations
  const userPhase: BusinessPhase = "Growth"; 
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [userStageData, setUserStageData] = useState<UserStage | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // State for mobile sidebar

  useEffect(() => {
    const storedData = localStorage.getItem('userStageData_v2');
    if (storedData) {
      setUserStageData(JSON.parse(storedData));
    }
    // Optional: Close mobile sidebar on route change if using a SPA router for internal nav
  }, []);

  const toggleAIAssistant = () => {
    setIsAIAssistantOpen(!isAIAssistantOpen);
    if (isMobileSidebarOpen) setIsMobileSidebarOpen(false); // Close mobile sidebar if AI panel opens
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Example data for LLM Panel context
  const lastUserProgress = "Completed Onboarding"; // This would be dynamic

  return (
    <div className="flex h-screen bg-neutral-100 font-sans">
      <Sidebar 
        onToggleAIAssistant={toggleAIAssistant} 
        isAIAssistantActive={isAIAssistantOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar onToggleMobileSidebar={toggleMobileSidebar} />
        <main 
          className={`flex-1 overflow-x-hidden overflow-y-auto bg-neutral-100 p-6 md:pt-6 
                      md:ml-64 
                      transition-all duration-300 ease-in-out 
                      pt-20 ${isMobileSidebarOpen ? 'blur-sm md:blur-none' : ''}`}>
          {isMobileSidebarOpen && (
            <div 
              onClick={toggleMobileSidebar} 
              className="fixed inset-0 bg-black/30 z-20 md:hidden"
              aria-hidden="true"
            ></div>
          )}
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