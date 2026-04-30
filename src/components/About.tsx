import aboutImage from '../assets/about.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  return (
    <section id="aboutme" className="py-48 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <TextSection />
            <ImageSection />
          </div>
        </div>
      </div>
    </section>
  );
};

const TextSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        关于我
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        我是胡晓科，目前是一名计算机科学与技术专业大三学生。
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        从大二第一次用 Python 写爬虫抓取电影数据，到后来系统学习大模型，再到今天带着代码进入项目开发，我逐渐明确了自己的方向：用 Python 连接 AI 理论与现实应用，做一个能把模型变「产品」的开发者。
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        我平时会主动读一些技术博客和github中的开源项目，并尝试复现一些简单的开源 demo。
      </p>
      <p className="text-gray-600 leading-relaxed">
        我知道自己现在还处于成长早期，代码和设计上还有很多不成熟的地方，但我愿意投入时间，在真实的需求中打磨自己。如果有机会与你共事或交流，我会非常珍惜。
      </p>
    </div>
  );
};

const ImageSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: '200ms' }}
    >
      <div className="aspect-[3/4] rounded-xl overflow-hidden max-w-[66%] border-4 border-white shadow-lg">
        <img src={aboutImage} alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default About;
