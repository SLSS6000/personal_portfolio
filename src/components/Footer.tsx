const Footer = () => {
  return (<footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute bottom-1/4 left-1/4 w-[20rem] h-[20rem] rounded-full blur-3xl opacity-80" style={{background: '#EAC6E3'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[18rem] h-[18rem] rounded-full blur-3xl opacity-70" style={{background: '#E8E3F4'}}></div>
        <div className="absolute bottom-1/5 left-1/3 w-[16rem] h-[16rem] rounded-full blur-3xl opacity-75" style={{background: '#F7E5DA'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-[14rem] h-[14rem] rounded-full blur-3xl opacity-60" style={{background: '#EAC6E3', transform: 'translateX(-50%)'}}></div>
        <div className="absolute bottom-1/5 right-1/3 w-[12rem] h-[12rem] rounded-full blur-3xl opacity-65" style={{background: '#E8E3F4'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-[10rem] h-[10rem] rounded-full blur-3xl opacity-55" style={{background: '#F7E5DA'}}></div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-24" style={{
        background: 'linear-gradient(to bottom, white, transparent)'
      }}></div>
      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center gap-4 mb-6">
          <a href="mailto:example@email.com" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-md transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-md transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM12 6c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4s-4-1.79-4-4V10c0-2.21 1.79-4 4-4zm0 18c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2z"/>
              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/>
              <path d="M6.5 11.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              <path d="M12 18c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-md transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          用代码记录成长 · 2026 · Hu Xiaoke
        </p>
      </div>
    </footer>);
};
export default Footer;