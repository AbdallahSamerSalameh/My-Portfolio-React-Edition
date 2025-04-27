import React from 'react';

const SoftSkill = ({ icon, text }) => {
  return (
    <li className="mb-4">
      <span className="inline-block bg-gray-700 py-2 px-4 rounded-lg border-2 border-gray-600">
        <i className={icon + " mr-2"}></i>
        {text}
      </span>
    </li>
  );
};

export default SoftSkill;