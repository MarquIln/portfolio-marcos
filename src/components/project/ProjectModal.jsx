import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Layers, Database, ArrowUpRight } from 'lucide-react';
import TechBadge from '../common/TechBadge';

function ProjectModal({ project, lang, theme, onClose, t }) {
    const p = project ? project[lang] : null;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!p) return null;

    const images = project.images || [];
    const hasImages = images.length > 0;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />
            <div className={`w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl z-10 relative flex flex-col md:flex-row overflow-hidden
        ${theme === 'dark' ? 'bg-[#1c1c1e] text-white' : 'bg-white text-[#1D1D1F]'}
      `}>

                {/* Mockup / Carousel Area */}
                <div className={`w-full md:w-1/2 p-8 flex items-center justify-center relative min-h-[400px]
          ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50'}
        `}>
                    {hasImages ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Mockup ${currentImageIndex + 1}`}
                                className={`max-h-[500px] w-auto max-w-full object-contain drop-shadow-2xl transition-all duration-500 rounded-2xl border 
                    ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'}
                 `}
                            />

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/10 hover:bg-black/20 text-white backdrop-blur-md transition-all z-10"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/10 hover:bg-black/20 text-white backdrop-blur-md transition-all z-10"
                                    >
                                        <ChevronRight size={24} />
                                    </button>

                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/20 backdrop-blur-md rounded-full">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition-all
                           ${idx === currentImageIndex
                                                        ? 'bg-white w-4'
                                                        : 'bg-white/40 hover:bg-white/60'}
                         `}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="text-center space-y-4">
                            <div className={`w-32 h-32 md:w-48 md:h-48 rounded-2xl mx-auto flex items-center justify-center shadow-inner
                 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}
               `}>
                                <span className="text-6xl">📱</span>
                            </div>
                            <p className="text-sm opacity-60 font-medium tracking-wide">{t.modal.mockups}</p>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                    <button
                        onClick={onClose}
                        className={`absolute top-6 right-6 p-2 rounded-full transition-colors z-20
               ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}
             `}
                    >
                        <X size={20} />
                    </button>

                    <div className="mt-2 text-sm font-bold opacity-40 uppercase tracking-widest">{p.subtitle}</div>

                    <div className="flex items-center gap-3 mt-2 mb-6">
                        {project.icon && (
                            <img src={project.icon} alt="Icon" className="w-10 h-10 rounded-lg shadow-sm" />
                        )}
                        <h2 className="text-4xl font-bold">{p.title}</h2>
                    </div>

                    <div className="prose max-w-none">
                        <p className="text-lg opacity-80 leading-relaxed mb-6">
                            {p.longDescription}
                        </p>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-colors mb-8 shadow-sm hover:shadow-md"
                            >
                                {project.id === 'retro-trip' ? t.status.live : t.modal.view} <ArrowUpRight size={18} />
                            </a>
                        )}

                        {/* Retro Trip Bullets */}
                        {p.bullets && (
                            <ul className="mb-6 space-y-2 list-disc pl-5 opacity-80">
                                {p.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        )}

                        {p.responsibilities && (
                            <div className="mb-6">
                                <h4 className="text-sm font-bold opacity-90 uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <Layers size={16} /> {t.modal.responsibilities}
                                </h4>
                                <ul className="space-y-2">
                                    {p.responsibilities.map((r, i) => (
                                        <li key={i} className="flex items-start gap-2 opacity-70 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                                            {r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {p.artifacts && (
                            <div className="mb-8">
                                <h4 className="text-sm font-bold opacity-90 uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <Database size={16} /> {t.modal.artifacts}
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {p.artifacts.map((a, i) => (
                                        <div key={i} className={`text-sm px-3 py-2 rounded-lg border
                        ${theme === 'dark' ? 'bg-white/5 border-white/5 text-gray-300' : 'bg-gray-50 border-gray-100 text-gray-600'}
                      `}>
                                            {a}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className={`pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-100'}`}>
                            <h4 className="text-sm font-bold opacity-90 uppercase tracking-wide mb-4">{t.modal.tech}</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(tech => (
                                    <TechBadge key={tech} name={tech} theme={theme} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectModal;
