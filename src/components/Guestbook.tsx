import { useState } from 'react';
import stampImg from '../assets/.webp/lucky-cover1.webp';

const Guestbook = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsSubmitting(true);

    // 模拟网络请求
    await new Promise(resolve => setTimeout(resolve, 500));
    alert("留言发送成功！");
    setName('');
    setEmail('');
    setContent('');
    setIsSubmitting(false);
  };

  return (
    <section id="guestbook" className="py-20 bg-[#fbfbfa] relative z-10">
      {/* 装饰性网格背景 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1500px]">
        {/* 明信片表单 */}
        <form onSubmit={handleSubmit} className="bg-[#fafafa] rounded-[2rem] p-8 md:p-12 border border-black shadow-[3px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-8 md:gap-12 relative overflow-hidden mb-20">
          
          {/* 左侧：留言内容 */}
          <div className="flex-1 min-h-[640px]">
            <textarea
              placeholder="Hi, 你好..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-full min-h-[640px] bg-transparent resize-none outline-none text-gray-700 text-lg placeholder-gray-400"
              required
            />
          </div>

          {/* 中间分割线 (仅在大屏幕显示) */}
          <div className="hidden md:block w-[1px] bg-gray-200"></div>

          {/* 右侧：表单信息与邮票 */}
          <div className="flex-1 flex flex-col relative pt-4 md:pt-0">
            
            {/* 邮票图片 */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6">
              <img
                src={stampImg}
                alt="Stamp"
                className="w-24 h-28 object-contain"
                style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.18))' }}
              />
            </div>

            <div className="mt-24 space-y-8 flex-1">
              {/* 收件人 */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">收件人</label>
                <div className="text-gray-800 text-sm font-medium pb-2 border-b border-gray-200">
                  me@myportfolio.com
                </div>
              </div>

              {/* 名字 */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">你的名字</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-200 pb-2 text-gray-800 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                  required
                />
              </div>

              {/* 邮箱 */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">你的邮箱</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-200 pb-2 text-gray-800 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2 bg-white rounded-xl border border-black text-gray-900 font-medium text-sm shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all disabled:opacity-50"
              >
                {isSubmitting ? '提交中...' : '提交'}
              </button>
            </div>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Guestbook;
