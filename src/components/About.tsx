import aboutLuckyClover from '../assets/about-lucky-clover.png';

const About = () => {
  return (
    <section id="aboutme" className="relative h-[65vh] flex items-center justify-center overflow-hidden z-10 bg-[#fbfbfa]">
      {/* 背景层 - 温暖乳白背景与微弱网格 */}
      <div className="absolute inset-0 bg-[#fbfbfa]">
        {/* 装饰性网格背景 */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-[1500px] flex-col justify-center">
        <div className="grid w-full grid-cols-1 items-end gap-10 lg:grid-cols-[0.85fr_1.75fr] lg:gap-20">
          {/* 左侧：图片结构占比 30% - 与右侧文字底部对齐 */}
          <div className="flex w-full justify-center lg:justify-start">
            <img
              src={aboutLuckyClover}
              alt="About Lucky Clover"
              className="mx-auto w-32 h-32 md:w-48 md:h-48 object-contain filter drop-shadow-sm translate-y-8 md:translate-y-12"
            />
          </div>

          {/* 右侧：文字结构占比 70% */}
          <div className="flex flex-col justify-center pr-0 text-left">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-12 md:mb-16 leading-relaxed font-medium animate-fade-in-up">
              专注于大模型应用开发与RAG系统构建，具备从数据处理、检索增强到LLM生成的完整AI应用工程能力。
            </h2>
            <h4>
              主要实践方向包括：
              RAG 检索增强生成系统（Vector / Graph RAG）、
              LLM Agent 工作流设计（LangGraph / Tool Calling）、
              AI Web 应用全栈开发（React + FastAPI）
            </h4>
            <br />
            <br />
            <p className="text-gray-600 text-sm md:text-base leading-loose animate-fade-in-up delay-300">
              在技术沉淀与项目实践上，我构建了以 <strong>LLM & Agent</strong> 为核心的多元化实战栈。我主导开发了<strong>「尝尝咸淡RAG系统」</strong>，依托 LangGraph 状态机重构传统线性 RAG，实现了具备“检索-评估-纠错-生成”智能化闭环的高级纠错检索系统，并结合 FastAPI 异步框架、Neo4j 知识图谱与 Chroma 向量数据库，大幅提升复杂问答的准确度。同时，我拥有良好的跨平台开发经验，包括使用微信原生框架和 Node.js 研发的<strong>「智慧医疗微信小程序」</strong>，以及开发中的<strong>「霉豆腐摆摊APP」</strong>。我深信 <strong>AI-Native / Vibe Coding</strong> 的开发范式，能熟练运用 AI 辅助工具极速落地想法（如本作品集网站的搭建与 Netlify 部署）。我拥有强烈的技术好奇心与快速学习能力，期待将 Agent 架构与全栈开发能力转化为真实的业务生产力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
