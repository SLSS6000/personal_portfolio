import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/10 backdrop-blur-md shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between w-full">
          <a href="#" className={`text-gray-900 font-medium hover:text-gray-700 transition-colors ${isMobileMenuOpen ? 'hidden md:block' : ''}`} style={{ fontFamily: 'Impact, Charcoal, sans-serif', fontSize: '18px', letterSpacing: '1px' }}>
            作品集'26
          </a>
          
          <div className="hidden md:flex items-center gap-8" style={{ marginLeft: '100px', marginRight: '100px' }}>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors text-sm" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '1px' }}>
              项目展示
            </a>
            <a href="#aboutme" className="text-gray-600 hover:text-gray-900 transition-colors text-sm" style={{ letterSpacing: '1px' }}>
              关于我
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              style={{ letterSpacing: '1px' }}
            >
              联系我
            </a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={toggleTheme}
              className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="切换主题"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
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
        className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-gray-100/95 backdrop-blur-md" />
        <div className="relative h-full flex flex-col justify-between py-8 px-6">
          <div className="flex justify-start">
            <span className="text-xl font-medium text-gray-900">作品集'26</span>
          </div>

          <nav className="flex flex-col gap-8">
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors text-xl"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '1px' }}
            >
              项目展示
            </a>
            <a
              href="#aboutme"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors text-xl"
              style={{ letterSpacing: '1px' }}
            >
              关于我
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-6 py-3 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors text-center"
              style={{ letterSpacing: '1px' }}
            >
              联系我
            </a>
          </nav>

          <button
            onClick={toggleTheme}
            className="self-center p-4 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="切换主题"
          >
            {theme === 'light' ? (
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
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
