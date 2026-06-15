const TechStack = () => {
  const techs = [
    'Python',
    'LLM',
    'Langchain',
    'Langgragh',
    'Agent',
    'Rag',
    'SQL',
    'Linux',
    'Git',
  ];

  return (
    <section className="relative z-10 w-full h-[45vh] bg-[#fbfbfa] overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-16 md:gap-24 whitespace-nowrap">
          {techs.map((tech, index) => (
            <span
              key={`group1-${index}`}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest text-gray-300 hover:text-gray-900 transition-colors duration-300 uppercase select-none"
              style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}
            >
              {tech}
            </span>
          ))}

          {techs.map((tech, index) => (
            <span
              key={`group2-${index}`}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest text-gray-300 hover:text-gray-900 transition-colors duration-300 uppercase select-none"
              style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
