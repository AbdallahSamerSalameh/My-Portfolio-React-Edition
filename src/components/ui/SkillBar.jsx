import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4 w-full md:w-5/12">
      <div className="h-8 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 rounded-full flex items-center justify-between px-3"
          style={{ width: `${percentage}%` }}
        >
          <span className="text-sm font-medium">{skill}</span>
          <span className="text-sm font-medium">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;