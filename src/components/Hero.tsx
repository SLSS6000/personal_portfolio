import { useState, useEffect } from 'react';
import heroPotato from '../assets/hero-potato.png';
import heroLuckyCover from '../assets/hero-lucky-cover.png';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#fbfbfa] overflow-hidden select-none z-0">
      {/* 装饰性网格背景（极淡，增加设计感） */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* 视差滚动容器：以 40% 的滚速平滑上滑，消除纯静止感 */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center overflow-visible"
        style={{ transform: `translateY(${-scrollY * 0.4}px)`, willChange: 'transform' }}
      >
        <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-[1500px] flex-col items-center justify-center">

          {/* 背景巨型文本层 - 容器整体居中，内部文字块左对齐，使用 font-medium 不要加粗，在中心平衡位置上移约0.5cm */}
          <div className="relative w-full flex flex-col items-center justify-center py-12 transform -translate-y-[4vh] md:-translate-y-[5vh] z-0">
            <div className="flex flex-col items-start justify-center font-medium uppercase text-gray-900 select-none tracking-[0.03em] leading-[0.98] text-left max-w-full">

              {/* 第一行: * ARTIFICIAL */}
              <div className="overflow-hidden w-full pb-2">
                <div className="flex flex-row items-center justify-start gap-3 md:gap-6 w-full animate-slide-up-from-bottom delay-100">
                  {/* 8角星标 */}
                  <svg
                    className="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-900 animate-[spin_16s_linear_infinite] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
                  </svg>
                  <span className="text-[13.5vw] md:text-[11vw] lg:text-[13rem] font-sans">
                    ARTIFICIAL
                  </span>
                </div>
              </div>

              {/* 第二行: INTELLIGENCE */}
              <div className="overflow-hidden w-full pb-2">
                <div className="text-[13.5vw] md:text-[11vw] lg:text-[13rem] font-sans w-full text-left animate-slide-up-from-bottom delay-300">
                  INTELLIGENCE
                </div>
              </div>

              {/* 第三行: ENGINEER */}
              <div className="overflow-hidden w-full pb-2">
                <div className="text-[13.5vw] md:text-[11vw] lg:text-[13rem] font-sans w-full text-left animate-slide-up-from-bottom delay-500">
                  ENGINEER
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 前景人物与花朵插图层 - 移至 section 直接子级以确保精准与首屏（100vh）底部绝对对齐 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center pointer-events-none z-10 w-full overflow-visible">
          <div className="relative w-[320px] md:w-[480px] lg:w-[560px] h-auto translate-y-0 flex items-end justify-center animate-slide-up-from-bottom-slow delay-700">

            {/* 核心人物 hero-potato */}
            <img
              src={heroPotato}
              alt="Hu Xiaoke Avatar"
              className="w-full h-auto object-contain filter drop-shadow-[0_8px_32px_rgba(0,0,0,0.06)] pointer-events-auto"
            />
          </div>
        </div>

        {/* 左侧装饰小花（四叶草） - 距离左侧 15%，贴于底部且只露出一半 */}
        <div className="absolute bottom-0 left-[15%] -translate-x-1/2 translate-y-[50%] pointer-events-auto z-20 overflow-visible animate-fade-in delay-900">
          <img
            src={heroLuckyCover}
            alt="Lucky Flower Bottom Left"
            className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 -rotate-[15deg] animate-float filter drop-shadow-sm"
            style={{ animationDuration: '4s' }}
          />
        </div>

        {/* 右侧装饰大四叶草 - 距离右下角指示箭头左侧约 2 厘米（约 75px），等比放大 1 倍，上移 10px */}
        <div className="absolute bottom-[42px] right-[130px] lg:right-[190px] pointer-events-auto z-20 overflow-visible animate-fade-in delay-900">
          <img
            src={heroLuckyCover}
            alt="Lucky Flower Bottom Right"
            className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rotate-[20deg] animate-float-reverse filter drop-shadow-sm"
            style={{ animationDuration: '5s' }}
          />
        </div>

        {/* 右下角极简滚动提示箭头 - 上移 10px */}
        <a
          href="#aboutme"
          className="absolute bottom-[42px] right-8 md:right-16 flex flex-col items-center gap-1 group z-20 hover:opacity-75 transition-opacity animate-fade-in delay-1000"
          aria-label="向下滚动"
        >
          <svg
            className="w-12 h-12 text-gray-900 transform group-hover:translate-y-1 transition-transform duration-300"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M597.333333 640V85.333333c0-23.68-19.285333-42.666667-43.093333-42.666667h-84.48A42.666667 42.666667 0 0 0 426.666667 85.333333v554.666667H341.717333c-47.232 0-62.805333 30.549333-34.56 68.266667l153.642667 204.8c28.501333 37.973333 74.112 37.717333 102.4 0l153.6-204.8c28.501333-37.973333 12.8-68.266667-34.517333-68.266667H597.333333z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

    </section>
  );
};

export default Hero;
