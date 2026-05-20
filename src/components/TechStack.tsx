
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
      {/* 极淡淡雅背景网格 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* 单容器视差滚动：第一组和第二组顺序排列，动画执行 -50% 位移即可实现完美的无缝循环 */}
        <div className="animate-marquee flex items-center gap-16 md:gap-24 whitespace-nowrap">
          
          {/* 第一组 */}
          {techs.map((tech, index) => (
            <span 
              key={`group1-${index}`}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest text-gray-300 hover:text-gray-900 transition-colors duration-300 uppercase select-none"
              style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}
            >
              {tech}
            </span>
          ))}

          {/* 第二组 (与第一组内容及间隔完全一致，形成完美闭环) */}
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
