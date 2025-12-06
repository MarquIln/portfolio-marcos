import React, { useState, useEffect } from 'react';
import { Globe, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import ErrorBoundary from './components/common/ErrorBoundary';
import SocialLink from './components/common/SocialLink';
import ProjectCard from './components/project/ProjectCard';
import ProjectModal from './components/project/ProjectModal';
import FeaturedProjectCard from './components/project/FeaturedProjectCard';
import { content } from './data/content';
import { projectsData } from './data/projects';

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLang = () => setLang(l => l === 'pt' ? 'en' : 'pt');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const t = content[lang];
  const pData = projectsData;

  const getStatusText = (project) => {
    if (project.designOnly) return t.status.design;
    if (project.id === 'retro-trip') return t.status.live;
    if (project.id === 'incognito') return t.status.secret;
    if (project.id === 'rotta' || project.id === 'lado-b') return t.status.concept;
    return t.status.academic;
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500 selection:text-white
      ${theme === 'dark' ? 'bg-[#151517] text-[#F5F5F7]' : 'bg-[#FBFBFD] text-[#1D1D1F]'}`}>

      <div className="max-w-6xl mx-auto p-6 md:p-12">

        <header className="mb-20 space-y-6 fade-in relative">
          <div className="absolute top-0 right-0 flex gap-3">
            <button
              onClick={toggleLang}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium"
              title="Switch Language"
            >
              <Globe size={18} />
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <div className="space-y-2 pt-8 md:pt-0">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Marcos Vinícius Raach
            </h1>
            <p className={`text-xl md:text-2xl font-medium max-w-2xl leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-[#86868B]'}`}>
              {t.header.role}
              <br />
              {t.header.subrole}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <SocialLink href="https://github.com/MarquIln" icon={<Github size={20} />} label="GitHub" theme={theme} />
            <SocialLink href="https://www.linkedin.com/in/marcosraach/" icon={<Linkedin size={20} />} label="LinkedIn" theme={theme} />
            <SocialLink href="mailto:marcosraach.1@gmail.com" icon={<Mail size={20} />} label="Email" theme={theme} />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          <FeaturedProjectCard
            project={pData[0]}
            lang={lang}
            theme={theme}
            onClick={setSelectedProject}
            statusText={getStatusText(pData[0])}
          />

          <ProjectCard project={pData[1]} lang={lang} theme={theme} onClick={setSelectedProject} statusText={getStatusText(pData[1])} darkCard />
          <ProjectCard project={pData[2]} lang={lang} theme={theme} onClick={setSelectedProject} statusText={getStatusText(pData[2])} />
          <ProjectCard project={pData[3]} lang={lang} theme={theme} onClick={setSelectedProject} statusText={getStatusText(pData[3])} />
          <ProjectCard project={pData[4]} lang={lang} theme={theme} onClick={setSelectedProject} statusText={getStatusText(pData[4])} />
          <ProjectCard project={pData[5]} lang={lang} theme={theme} onClick={setSelectedProject} statusText={getStatusText(pData[5])} />
          <ProjectCard project={pData[6]} lang={lang} theme={theme} onClick={setSelectedProject} statusText={getStatusText(pData[6])} />
          <ProjectCard project={pData[7]} lang={lang} theme={theme} onClick={setSelectedProject} statusText={getStatusText(pData[7])} />
        </div>

        <footer className="mt-32 pb-8 text-center">
          <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-[#86868B]'}`}>
            {t.footer}
          </p>
        </footer>

      </div>

      {selectedProject && (
        <ErrorBoundary onClose={() => setSelectedProject(null)}>
          <ProjectModal
            project={selectedProject}
            lang={lang}
            theme={theme}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        </ErrorBoundary>
      )}
    </div>
  );
}

export default App;