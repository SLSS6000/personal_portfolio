import aboutLuckyClover from '../assets/about-lucky-clover.png';

const About = () => {
  return (
    <section id="aboutme" className="relative h-[65vh] flex items-center justify-center overflow-hidden z-10 bg-[#fbfbfa]">
      {/* 背景层 - 温暖乳白背景与微弱网格 */}
      <div className="absolute inset-0 bg-[#fbfbfa]">
        {/* 装饰性网格背景 */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="relative z-10 w-[90%] mx-auto h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12 w-full items-end">
          {/* 左侧：图片结构占比 30% - 与右侧文字底部对齐 */}
          <div className="md:col-span-3 w-full flex justify-center">
            <img 
              src={aboutLuckyClover} 
              alt="About Lucky Clover" 
              className="mx-auto w-32 h-32 md:w-48 md:h-48 object-contain filter drop-shadow-sm translate-y-8 md:translate-y-12"
            />
          </div>

          {/* 右侧：文字结构占比 70% */}
          <div className="md:col-span-7 flex flex-col justify-center text-left pr-0 md:pr-12">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-12 md:mb-16 leading-relaxed font-medium animate-fade-in-up">
              我是计算机相关专业大三在读学生，专注于大模型（LLM）应用落地与智能体（Agent）工程，目前正在积极寻找 AI 开发工程师、大模型应用研发或算法工程方向的实习机会。
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-loose animate-fade-in-up delay-300">
              在专业技能与项目实践方面，我紧跟生成式 AI 前沿技术，具备扎实的 Python 开发功底与 FastAPI 异步高并发后端服务设计能力。我熟练运用 LangChain 核心架构，并深入掌握 LangGraph 状态机机制，曾作为独立开发者基于 FastAPI 与 LangGraph 构建了一套支持复杂业务循环与条件路由的多智能体工作流系统。在项目中，我利用 LangGraph 重新设计了传统 RAG 的线性流程，引入高级纠错 RAG 机制，通过状态机实现了“检索-评估-纠错-生成”的智能化闭环，大幅减少大模型幻觉，并利用 Tool-Calling 机制为 Agent 拓宽了网络搜索与数据库操作能力。作为一名掌握 AI-Native 开发思维的求职者，我能熟练使用 Cursor、GitHub Copilot 等 AI 辅助编程工具进行高效开发与问题调试。我充满技术热情，具备极强的自学能力，期待加入优秀的团队，将前沿的 Agent 架构转化为真实的业务生产力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
