import { useState, useEffect, useCallback } from 'react';
import { UserStage } from '../config/typeformOnboardingQuestions';

const USER_STAGE_DATA_KEY = 'userStageData_v2';

interface UseUserProgressReturn {
  userProgress: UserStage | null;
  saveUserProgress: (data: UserStage) => void;
  clearUserProgress: () => void;
  isLoading: boolean;
}

export const useUserProgress = (): UseUserProgressReturn => {
  const [userProgress, setUserProgress] = useState<UserStage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem(USER_STAGE_DATA_KEY);
      if (storedData) {
        setUserProgress(JSON.parse(storedData) as UserStage);
      } else {
        setUserProgress(null); 
      }
    } catch (error) {
      console.error('Error loading user progress from localStorage:', error);
      setUserProgress(null);
    }
    setIsLoading(false);
  }, []);

  const saveUserProgress = useCallback((data: UserStage) => {
    try {
      localStorage.setItem(USER_STAGE_DATA_KEY, JSON.stringify(data));
      setUserProgress(data);
      // Optional: Mark onboarding as completed if saving progress
      // localStorage.setItem('onboardingCompleted_v2', 'true'); 
    } catch (error) {
      console.error('Error saving user progress to localStorage:', error);
    }
  }, []);

  const clearUserProgress = useCallback(() => {
    try {
      localStorage.removeItem(USER_STAGE_DATA_KEY);
      // Also clear the completion flag if you use one consistently
      // localStorage.removeItem('onboardingCompleted_v2');
      setUserProgress(null);
    } catch (error) {
      console.error('Error clearing user progress from localStorage:', error);
    }
  }, []);

  return { userProgress, saveUserProgress, clearUserProgress, isLoading };
}; 