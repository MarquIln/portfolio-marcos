import React from 'react';
import { PenTool, Code } from 'lucide-react';
import TechBadge from '../common/TechBadge';

function ProjectCard({ project, lang, theme, onClick, statusText, darkCard = false }) {
    const content = project[lang];
    return (
        <div
            onClick={() => onClick(project)}
            className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-xl border
        ${darkCard
                    ? 'bg-[#1D1D1F] border-[#2c2c2e] text-white'
                    : theme === 'dark'
                        ? 'bg-[#1c1c1e] border-[#2c2c2e] text-gray-200'
                        : 'bg-white border-gray-100 text-gray-900 shadow-sm'
                }
      `}
        >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.designOnly ? (
                    <PenTool size={20} className="text-rose-400 opacity-60" />
                ) : project.id === 'ages-3' ? (
                    <div className="flex gap-2">
                        <Code size={20} className="text-blue-400 opacity-60" />
                        <PenTool size={20} className="text-rose-400 opacity-60" />
                    </div>
                ) : (
                    <Code size={20} className="text-current opacity-60" />
                )}
            </div>

            <div className="flex flex-col h-full justify-between">
                <div>
                    <span className="text-xs font-bold tracking-wider uppercase mb-3 block opacity-50">
                        {content.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{content.title}</h3>
                    <p className={`text-sm leading-relaxed mb-6 line-clamp-4 opacity-70`}>
                        {content.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                        <TechBadge key={t} name={t} theme={theme} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
