import React from 'react';

function TechBadge({ name, theme }) {
    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border
      ${theme === 'dark'
                ? 'bg-white/10 border-white/5 text-gray-200'
                : 'bg-gray-100 border-gray-200 text-gray-700'
            }
    `}>
            {name}
        </span>
    );
}

export default TechBadge;
