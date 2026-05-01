const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景层 - 白色背景 */}
      <div className="absolute inset-0 bg-white">
        {/* 不规则渐变斑点 - 带流动动画 */}
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-80 animate-float" style={{background: '#EAC6E3'}}></div>
        <div className="absolute top-1/3 right-1/4 w-[24rem] h-[24rem] rounded-full blur-3xl opacity-70 animate-float-reverse" style={{background: '#E8E3F4'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-[20rem] h-[20rem] rounded-full blur-3xl opacity-75 animate-float-diagonal" style={{background: '#F7E5DA'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[18rem] h-[18rem] rounded-full blur-3xl opacity-60 animate-float" style={{background: '#EAC6E3', animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-[16rem] h-[16rem] rounded-full blur-3xl opacity-65 animate-float-reverse" style={{background: '#E8E3F4', animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-[14rem] h-[14rem] rounded-full blur-3xl opacity-55 animate-float-diagonal" style={{background: '#F7E5DA', animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-6 leading-relaxed animate-fade-in-up delay-100">
          Hello! 我是一个用 Python 构建 AI 应用的实践者。
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-300">
          一名热爱 Python 与 AI 的在读学生 / 实习开发者。在校期间通过课程项目与实践，完成了图像分类、情感分析、简单 RAG 应用等若干 AI 小项目。善于快速学习新技术，乐于与团队协作，希望在实际项目中不断打磨工程能力，成为一名优秀的 AI 应用工程师。
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-500">
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
            Python
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
            LLM
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
            Langchain/Langgragh
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
            Agent/Rag
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
            SQL/Linux/Git
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px border-t border-dashed border-gray-300"></div>
    </section>
  );
};

export default Hero;
