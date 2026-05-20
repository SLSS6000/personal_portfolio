import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 bg-transparent ${isScrolled
            ? 'py-3'
            : 'py-6'
          }`}
      >
        <nav className="relative flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* 左侧姓名/Logo - 下滑时平滑淡出隐藏 */}
          <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none -translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <a href="#" className={`text-gray-900 font-bold font-sans hover:text-gray-700 transition-colors text-base md:text-lg tracking-wide ${isMobileMenuOpen ? 'hidden md:block' : ''}`}>
              作品集'26
            </a>
          </div>

          {/* 中间绝对居中：项目展示和关于我 - 下滑时平滑淡出隐藏 */}
          <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 items-center gap-8 transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 -translate-y-1/2'}`}>
            <a href="#projects" className="text-gray-600 font-sans tracking-wide hover:text-gray-900 transition-colors text-base md:text-lg font-medium">
              项目展示
            </a>
            <a href="#aboutme" className="text-gray-600 font-sans tracking-wide hover:text-gray-900 transition-colors text-base md:text-lg font-medium">
              关于我
            </a>
          </div>

          {/* 右侧：联系我 & 移动端按钮 */}
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="#contact"
              className={`text-gray-900 font-sans tracking-wide hover:text-gray-600 transition-colors text-base md:text-lg font-medium underline underline-offset-4 transition-all duration-300 ${isScrolled ? 'block' : 'hidden md:block'}`}
            >
              联系我
            </a>

            <button
              className={`p-2 rounded-full hover:bg-gray-100 transition-colors transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none scale-75 hidden' : 'md:hidden opacity-100'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="absolute inset-0 bg-gray-100/95 backdrop-blur-md" />
        <div className="relative h-full flex flex-col justify-between py-8 px-6">
          <div className="flex justify-start">
            <span className="text-xl font-bold font-sans tracking-wide text-gray-900">作品集'26</span>
          </div>

          <nav className="flex flex-col gap-8">
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="text-gray-600 font-sans tracking-wide hover:text-gray-900 transition-colors text-xl"
            >
              项目展示
            </a>
            <a
              href="#aboutme"
              onClick={closeMobileMenu}
              className="text-gray-600 font-sans tracking-wide hover:text-gray-900 transition-colors text-xl"
            >
              关于我
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="text-gray-600 font-sans tracking-wide hover:text-gray-900 transition-colors text-xl underline underline-offset-4"
            >
              联系我
            </a>
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
