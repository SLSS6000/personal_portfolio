import { projects } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#fbfbfa] relative z-10">
      {/* 装饰性网格背景 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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

  const getImageSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 w-full';
      case 'medium':
        return 'col-span-1 row-span-2 w-full';
      case 'small':
      default:
        return 'col-span-1 row-span-1 w-full';
    }
  };

  const renderPortfolioLayout = () => (
    <div className="flex gap-4 h-[600px]">
      <div className="flex-1 flex flex-col gap-4 w-[60%]">
        <div className="flex-1 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
          <img
            src={project.images[0].src === '#' ? 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20web%20application%20UI%20design%20mockup%20clean%20minimal&image_size=landscape_16_9' : project.images[0].src}
            alt={project.images[0].alt}
            style={{ width: '100%', height: '100%' }}
            className="object-contain hover:-rotate-2 transition-transform duration-300 p-6"
          />
        </div>
        <div className="flex-1 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
          <img
            src={project.images[2].src === '#' ? 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20web%20application%20UI%20design%20mockup%20clean%20minimal&image_size=landscape_16_9' : project.images[2].src}
            alt={project.images[2].alt}
            style={{ width: '100%', height: '100%' }}
            className="object-contain hover:rotate-2 transition-transform duration-300 p-6"
          />
        </div>
      </div>
      <div className="w-[40%] rounded-xl overflow-hidden shadow-sm transition-all duration-300">
        <img
          src={project.images[1].src === '#' ? 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20web%20application%20UI%20design%20mockup%20clean%20minimal&image_size=landscape_16_9' : project.images[1].src}
          alt={project.images[1].alt}
          style={{ width: '100%', height: '100%' }}
          className="object-contain hover:scale-105 transition-transform duration-300 p-6"
        />
      </div>
    </div>
  );

  const renderDefaultLayout = () => (
    <div className="grid grid-cols-3 gap-4 h-[600px]">
      {project.images.map((image, imgIndex) => (
        <div
          key={imgIndex}
          className={`${getImageSizeClasses(image.size)} rounded-xl overflow-hidden shadow-sm transition-all duration-300`}
          style={{ margin: '4px' }}
        >
          <img
            src={image.src === '#' ? 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20web%20application%20UI%20design%20mockup%20clean%20minimal&image_size=landscape_16_9' : image.src}
            alt={image.alt}
            style={{ width: '100%', height: '100%' }}
            className={`object-contain transition-transform duration-300 ${imgIndex % 2 === 0 ? 'hover:-rotate-2' : 'hover:rotate-2'} p-6`}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-gray-50 rounded-2xl p-4 mb-6">
        {project.id === 4 ? renderPortfolioLayout() : renderDefaultLayout()}
      </div>
    </div>
  );
};

const ProjectContent = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`max-w-4xl transition-all duration-700 ${
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
