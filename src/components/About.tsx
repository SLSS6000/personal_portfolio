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
              专注于 AI Agent（智能体集群）开发与高级 RAG 系统架构，具备将大模型生态与全栈工程技术深度融合的落地能力。
            </h2>
            <h4>
              核心技术方向包括：
              <strong>多智能体集群（Multi-Agent System）</strong>设计、
              <strong>自适应检索增强生成（Self-RAG）</strong>架构、
              <strong>全栈 AI 交互应用（FastAPI + React / 移动端端云协同）</strong>。
            </h4>
            <br />
            <br />
            <p className="text-gray-600 text-sm md:text-base leading-loose animate-fade-in-up delay-300">
              在实际工程落地中，我坚持以<strong>数据驱动与智能流控</strong>为导向构建复杂 AI 应用。在智能体领域，我开发了 <strong>「AI 赛博小镇」</strong> 游戏后端，基于 HelloAgents 框架并融合了 Neo4j 图数据库（人际网络关系）与 Qdrant 向量数据库（长短期记忆检索），实现了自主角色决策与动态好感度演化系统。在检索增强生成方向，我主导设计了 <strong>「尝尝咸淡 RAG 系统」</strong>，利用 LangGraph 状态机重构了传统 RAG 流水线，构建了包含意图路由、混合检索评估以及幻觉拦截的高性能 Self-RAG 流程。此外，我具有坚实的全栈与跨平台开发能力，独立开发了 <strong>「智慧医疗微信小程序」</strong> 移动端服务。作为 <strong>Vibe Coding</strong> 的坚定实践者，我熟练掌握现代化工具链与工程化部署（如本作品集的响应式开发与云端托管）。我热爱前沿技术探索，致力于将 AI 赋能的交互模式与底层系统工程融合，创造兼具商业价值与卓越用户体验的产品。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
