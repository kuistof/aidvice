import React from 'react';
import { UserStage } from '../../config/typeformOnboardingQuestions'; // Assuming UserStage is exported here
import { Briefcase, BarChart2, Users, TrendingUp, Building, DollarSign } from 'lucide-react';

interface CategoryScoresProps {
  userStageData: UserStage | null;
}

const categoryMaxScores = {
  product: 8,
  marketing: 8,
  sales: 8,
  recruiting: 9,
};

const categoryLabelsAndIcons = {
  product: { label: "Produkt & Angebot", icon: Briefcase, color: "text-sky-500", bgColor: "bg-sky-500" },
  marketing: { label: "Marketing", icon: BarChart2, color: "text-emerald-500", bgColor: "bg-emerald-500" },
  sales: { label: "Vertrieb", icon: DollarSign, color: "text-amber-500", bgColor: "bg-amber-500" },
  recruiting: { label: "Recruiting & Team", icon: Users, color: "text-purple-500", bgColor: "bg-purple-500" },
};

const ScoreBar: React.FC<{ score: number; maxScore: number; label: string; icon: React.ElementType; color: string; bgColor: string }> = 
  ({ score, maxScore, label, icon: Icon, color, bgColor }) => {
  const percentage = (score / maxScore) * 100;
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <Icon className={`h-4 w-4 mr-2 ${color}`} />
          <span className={`text-sm font-medium ${color}`}>{label}</span>
        </div>
        <span className={`text-sm font-medium ${color}`}>{score} / {maxScore}</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-2.5">
        <div 
          className={`${bgColor} h-2.5 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const CategoryScores: React.FC<CategoryScoresProps> = ({ userStageData }) => {
  if (!userStageData) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-soft h-full">
        <h3 className="text-lg font-semibold text-neutral-700 mb-4">Reifegrad je Bereich</h3>
        <p className="text-neutral-500">Onboarding-Daten nicht gefunden. Bitte zuerst das Onboarding abschließen.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-soft h-full">
      <div className="flex items-center mb-5">
        <TrendingUp className="h-6 w-6 text-accent mr-2" />
        <h3 className="text-xl font-semibold text-neutral-800">Reifegrad je Bereich</h3>
      </div>

      {(Object.keys(categoryMaxScores) as Array<keyof typeof categoryMaxScores>).map(key => {
        if (userStageData[key] !== undefined) {
          const config = categoryLabelsAndIcons[key];
          return (
            <ScoreBar 
              key={key}
              label={config.label}
              icon={config.icon}
              score={userStageData[key] as number} 
              maxScore={categoryMaxScores[key]}
              color={config.color}
              bgColor={config.bgColor}
            />
          );
        }
        return null;
      })}
      
      <div className="mt-6 border-t pt-4 space-y-3">
        <div className="flex items-center">
          <Building size={18} className="text-neutral-500 mr-2.5" />
          <span className="text-sm text-neutral-600">Mitarbeitende: <strong className="text-neutral-800">{userStageData.headcount || 'N/A'}</strong></span>
        </div>
        <div className="flex items-center">
          <DollarSign size={18} className="text-neutral-500 mr-2.5" />
          <span className="text-sm text-neutral-600">Jahresumsatz: <strong className="text-neutral-800">{userStageData.revenue || 'N/A'}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default CategoryScores; 