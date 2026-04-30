import { projects } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            项目展示
          </h2>
        </div>
        <div className="space-y-36">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <div className="group">
      <ProjectImage project={project} index={index} />
      <ProjectContent project={project} index={index} />
    </div>
  );
};

const ProjectImage = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-gray-50 rounded-2xl p-8 mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  );
};

const ProjectContent = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`max-w-3xl transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100 + 150}ms` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-lg font-bold text-gray-900">
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
