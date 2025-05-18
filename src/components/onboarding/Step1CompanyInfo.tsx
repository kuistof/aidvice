import React from 'react';

interface Step1Data {
  companyName?: string;
  legalStructure?: string;
  employees?: string;
  monthlyRevenue?: string;
}

interface Step1CompanyInfoProps {
  data: Step1Data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (field: keyof Step1Data, value: any) => void;
  onNext: () => void;
}

const employeeOptions = [
  "1-5",
  "6-10",
  "11-50",
  "51-200",
  "200+"
];

const Step1CompanyInfo: React.FC<Step1CompanyInfoProps> = ({ data, onChange, onNext }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-neutral-800 mb-1">Welcome! Let's set up your profile.</h2>
      <p className="text-sm text-neutral-500 mb-6">Step 1: Company Information</p>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700 mb-1">Company Name (Optional)</label>
        <input 
          type="text" 
          name="companyName" 
          id="companyName"
          value={data.companyName || ''}
          onChange={(e) => onChange('companyName', e.target.value)}
          placeholder="Your Company Inc."
          className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-xl shadow-soft text-sm focus:outline-none focus:ring-accent focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="legalStructure" className="block text-sm font-medium text-neutral-700 mb-1">Legal Structure</label>
        <input 
          type="text" 
          name="legalStructure" 
          id="legalStructure"
          value={data.legalStructure || ''}
          onChange={(e) => onChange('legalStructure', e.target.value)}
          placeholder="e.g., GmbH, UG, Freelancer"
          className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-xl shadow-soft text-sm focus:outline-none focus:ring-accent focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="employees" className="block text-sm font-medium text-neutral-700 mb-1">Number of Employees</label>
        <select 
          name="employees" 
          id="employees"
          value={data.employees || ''}
          onChange={(e) => onChange('employees', e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-xl shadow-soft text-sm focus:outline-none focus:ring-accent focus:border-accent"
        >
          <option value="" disabled>Select number of employees</option>
          {employeeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-neutral-700 mb-1">Average Monthly Revenue (EUR)</label>
        <input 
          type="number" 
          name="monthlyRevenue" 
          id="monthlyRevenue"
          value={data.monthlyRevenue || ''}
          onChange={(e) => onChange('monthlyRevenue', e.target.value)}
          placeholder="e.g., 10000"
          className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-xl shadow-soft text-sm focus:outline-none focus:ring-accent focus:border-accent"
        />
      </div>

      <button 
        onClick={onNext}
        className="w-full mt-8 bg-accent text-white py-3 px-6 rounded-xl shadow-soft hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50 transform active:scale-95 transition-transform duration-150 ease-in-out font-medium"
      >
        Next
      </button>
    </div>
  );
};

export default Step1CompanyInfo; 