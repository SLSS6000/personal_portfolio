import aboutLuckyClover from '../assets/.webp/about-lucky-clover.webp';

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
            <h3 className="text-4xl md:text-5xl text-gray-1000 mb-12 md:mb-16 leading-relaxed font-medium animate-fade-in-up">
              I am the quality guard behind your product.
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-loose animate-fade-in-up delay-300">
              之前探索过 AI Agent 相关开发，在实践中慢慢转向软件测试方向；既有后端开发基础，更擅长站在用户角度审视产品，挖掘潜在问题。
              专注软件测试，擅长接口测试、Web 功能测试、自动化测试实践；具备从需求分析、用例设计，到缺陷管理、CI/CD 流水线基础落地能力。
              细心、耐心，愿意反复打磨细节；遇到报错不会轻易摆烂，喜欢一点点拆解定位问题。日常喜欢整理笔记，会把踩过坑沉淀成文档。不局限于只会点点点，希望做懂开发思维的测试工程师。
              期待可以参与产品质量保障工作，在项目中持续成长，用测试思维为产品保驾护航。
            </p>
         
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
