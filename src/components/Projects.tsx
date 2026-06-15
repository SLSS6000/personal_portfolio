import { useState } from 'react';
import { projects, type Project } from '../data/projects';
import heroLuckyCover from '../assets/hero-lucky-cover.png';

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative z-10 bg-[#fbfbfa] py-24 md:py-32">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 mx-auto grid w-[92%] max-w-[1500px] grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.75fr] lg:gap-20">
        <div className="relative min-h-[220px]">
          <div className="sticky top-28">
            <h2 className="text-2xl font-semibold tracking-normal text-gray-900 md:text-4xl">
              项目简介.
            </h2>
            <img src={heroLuckyCover} alt="decoration" className="pointer-events-none mt-6 hidden h-24 w-24 rotate-[-18deg] rounded-full object-cover opacity-80 lg:block" />
          </div>
        </div>

        <div className="space-y-5">
          {projects.map((project) => (
            <ProjectAccordion
              key={project.id}
              project={project}
              isActive={project.id === activeProjectId}
              onSelect={() => setActiveProjectId((currentId) => (currentId === project.id ? null : project.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectAccordion = ({
  project,
  isActive,
  onSelect,
}: {
  project: Project;
  isActive: boolean;
  onSelect: () => void;
}) => {
  return (
    <article
      className={`overflow-hidden rounded-[1rem] border-[1.5px] border-gray-900 bg-[#fbfbfa] shadow-[0_5px_0_#222] transition-all duration-300 ${isActive ? 'translate-y-0' : 'hover:-translate-y-1 hover:shadow-[0_7px_0_#222]'
        }`}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-expanded={isActive}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-gray-900 outline-none transition-colors focus-visible:bg-white md:px-10 md:py-8"
      >
        <span className="w-1/2 shrink-0 break-words text-xl font-semibold leading-tight md:text-3xl">
          {project.summary}
        </span>
        <span className={`shrink-0 text-4xl font-light leading-none transition-transform duration-300 md:text-5xl ${isActive ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-6 pb-8 md:px-10 md:pb-10">
            <div className="mb-7 flex items-center gap-5">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-black text-gray-900 shadow-[3px_4px_0_#f9a8d4]"
                style={{ backgroundColor: project.logoColor }}
              >
                {project.logoText}
              </div>
              <div>
                <h3 className="text-lg text-gray-900 md:text-xl">{project.title}</h3>

              </div>
            </div>

            <p className="max-w-5xl text-lg leading-relaxed text-gray-700 md:text-xl">
              {project.detail}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;
