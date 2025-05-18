import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
// import OLD_OnboardingPage from './pages/OLD_OnboardingPage'; // Old onboarding kept for reference
import DashboardPage from './pages/DashboardPage';
import TypeformOnboardingPage from './pages/TypeformOnboardingPage';

// This component checks if onboarding is completed and navigates accordingly.
// It's used as a wrapper for routes that require onboarding to be completed.
const ProtectedRoute: React.FC = () => {
  const isOnboardingCompleted = localStorage.getItem('onboardingCompleted_v2') === 'true';
  if (!isOnboardingCompleted) {
    return <Navigate to="/onboarding" replace />;
  }
  return <Outlet />; // Renders the child route (e.g., DashboardPage)
};

// This component checks if onboarding is already done and navigates to dashboard if so.
const OnboardingRoute: React.FC = () => {
  const isOnboardingCompleted = localStorage.getItem('onboardingCompleted_v2') === 'true';
  if (isOnboardingCompleted) {
    return <Navigate to="/dashboard" replace />;
  }
  return <TypeformOnboardingPage />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<OnboardingRoute />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          {/* Nested route for dashboard, so ProtectedRoute logic applies */}
          <Route index element={<DashboardPage />} />
        </Route>
        {/* Default route: if onboarding not done, go to /onboarding, else to /dashboard */}
        <Route 
          path="*" 
          element={
            localStorage.getItem('onboardingCompleted_v2') === 'true' ? 
            <Navigate to="/dashboard" replace /> : 
            <Navigate to="/onboarding" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App; 