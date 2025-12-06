import React from 'react';
import { Code } from 'lucide-react';
import TechBadge from '../common/TechBadge';

function FeaturedProjectCard({ project, lang, theme, onClick, statusText }) {
    const content = project[lang];

    return (
        <div
            onClick={() => onClick(project)}
            className={`md:col-span-2 group relative overflow-hidden rounded-3xl p-8 border shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-[1.01]
        ${theme === 'dark' ? 'bg-[#1c1c1e] border-[#2c2c2e] text-white' : 'bg-white border-gray-100 text-gray-900'}
      `}
        >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'}`}>
                    <Code size={24} className={theme === 'dark' ? 'text-white' : 'text-black/60'} />
                </div>
            </div>
            <div className="h-full flex flex-col justify-between z-10 relative">
                <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-semibold tracking-wide uppercase mb-4">
                        {statusText}
                    </span>

                    <div className="flex items-center gap-4 mb-3">
                        {project.icon && (
                            <img src={project.icon} alt="Icon" className="w-12 h-12 rounded-xl shadow-sm" />
                        )}
                        <h2 className="text-4xl font-bold">{content.title}</h2>
                    </div>

                    <p className={`text-lg max-w-md line-clamp-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {content.description}
                    </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                        <TechBadge key={tech} name={tech} theme={theme} />
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
        </div>
    );
}

export default FeaturedProjectCard;
