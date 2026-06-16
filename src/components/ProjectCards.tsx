import { useEffect, useRef, useState } from 'react';
import projectcards1 from '../assets/projectcards1.png';
import projectcards2 from '../assets/projectcards2.png';
import projectcards3 from '../assets/projectcards3.png';
import projectcards4 from '../assets/projectcards4.png';


import heroLuckyCover from '../assets/hero-lucky-cover.png';


const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const ProjectCards = () => {
  const stackRef = useRef<HTMLElement>(null);
  const [stackProgress, setStackProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(900);

  const stackCards = [
    {
      title: '尝尝咸淡RAG系统',
      description: '查看源码',
      color: '#9BE7BF',
      image: projectcards1,
      rotate: -4,
    },
    {
      title: 'AI赛博小镇',
      description: '查看源码',
      color: '#C6A6EA',
      image: projectcards2,
      rotate: 3,
    },
    {
      title: '个人作品集网站',
      description: '查看源码',
      color: '#EFB9B3',
      image: projectcards3,
      rotate: -2,
    },
    {
      title: '智慧医疗小程序',
      description: '查看源码',
      color: '#F1D277',
      image: projectcards4,
      rotate: 4,
    }
  ];

  useEffect(() => {
    let frame = 0;

    const updateStackProgress = () => {
      if (!stackRef.current) return;

      const sectionTop = stackRef.current.offsetTop;
      const scrollableDistance = stackRef.current.offsetHeight - window.innerHeight;
      const nextProgress = scrollableDistance > 0
        ? clamp((window.scrollY - sectionTop) / scrollableDistance)
        : 0;

      setViewportHeight(window.innerHeight);
      setStackProgress(nextProgress);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateStackProgress);
    };

    updateStackProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  const getCardStyle = (index: number, rotate: number) => {
    const segment = 1 / (stackCards.length - 1);
    const reveal = index === 0 ? 1 : clamp((stackProgress - (index - 1) * segment) / segment);
    const cardsAbove = stackCards
      .slice(index + 1)
      .reduce((count, _card, nextIndex) => {
        const nextCardIndex = index + nextIndex + 1;
        const nextReveal = clamp((stackProgress - (nextCardIndex - 1) * segment) / segment);
        return count + nextReveal;
      }, 0);
    const translateY = (1 - reveal) * (viewportHeight * 0.95) + reveal * (index * 14);
    const scale = 1 - cardsAbove * 0.025;
    const liftRotate = rotate + (1 - reveal) * (rotate > 0 ? 7 : -7);

    return {
      zIndex: index + 1,
      opacity: index === 0 ? 1 : clamp(reveal * 1.35),
      transform: `translate3d(-50%, ${translateY}px, 0) rotate(${liftRotate}deg) scale(${scale})`,
    };
  };

  return (
    <section
      id="project-cards"
      ref={stackRef}
      className="relative z-10 h-[430vh] bg-[#fbfbfa]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <img src={heroLuckyCover} alt="decoration" className="pointer-events-none absolute left-[6%] top-20 hidden h-24 w-24 rotate-[-18deg] rounded-full object-cover opacity-80 md:block" />
        <img src={heroLuckyCover} alt="decoration" className="pointer-events-none absolute right-[8%] top-[50%] hidden h-28 w-28 rotate-[18deg] rounded-full object-cover opacity-80 lg:block" />

        <div className="relative mx-auto flex h-full w-[92%] max-w-[1500px] flex-col items-center pt-20 md:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400">Project Cards</p>
          </div>

          <div className="relative mt-8 h-[40vh] w-full max-w-xl md:mt-4">
            {stackCards.map((card, index) => (
              <article
                key={card.title}
                className="absolute left-1/2 top-0 w-[min(70vw,500px)] will-change-transform"
                style={getCardStyle(index, card.rotate)}
              >
                <div className="relative transition-transform duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[2rem] bg-gray-900"></div>
                  <div
                    className="relative rounded-[2rem] p-4 shadow-sm md:p-6"
                    style={{ backgroundColor: card.color }}
                  >
                    <div className="px-2 pb-4 text-white md:px-4 md:pb-5">
                      <h3 className="text-3xl font-black leading-tight md:text-5xl">{card.title}</h3>
                    </div>
                    <div className="aspect-square w-full overflow-hidden rounded-3xl bg-white">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-2 pt-4 text-center text-white md:px-4 md:pt-5">
                      <a href="https://github.com/SLSS6000" target="_blank" rel="noopener noreferrer" className="underline text-xs font-bold md:text-sm">{card.description}</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
