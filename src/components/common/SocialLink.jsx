import React from 'react';

function SocialLink({ href, icon, label, theme }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full border transition-all shadow-sm
        ${theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300 hover:text-white'
                    : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-600 hover:text-black'
                }
      `}
            aria-label={label}
        >
            {icon}
        </a>
    );
}

export default SocialLink;
