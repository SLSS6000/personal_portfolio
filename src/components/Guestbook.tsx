import { useState } from 'react';

interface Message {
  id: number;
  name: string;
  content: string;
  time: string;
}

const Guestbook = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, name: '访客甲', content: '作品集很棒，期待更多作品！', time: '2026-04-28' },
    { id: 2, name: '开发者乙', content: '交互效果很流畅，设计感十足', time: '2026-04-29' },
  ]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsSubmitting(true);

    const newMessage: Message = {
      id: Date.now(),
      name: name.trim(),
      content: content.trim(),
      time: new Date().toISOString().split('T')[0],
    };

    await new Promise(resolve => setTimeout(resolve, 500));

    setMessages([newMessage, ...messages]);
    setName('');
    setContent('');
    setIsSubmitting(false);
  };

  return (
    <section id="guestbook" className="py-12 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-gray-900 text-center mb-12">
          留言板
        </h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 mb-10 shadow-sm">
          <div className="mb-4">
            <input
              type="text"
              placeholder="你的名字"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="说点什么吧..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '提交中...' : '提交留言'}
          </button>
        </form>

        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-900">{msg.name}</span>
                <span className="text-sm text-gray-400">{msg.time}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{msg.content}</p>
            </div>
          ))}
        </div>

        {messages.length === 0 && (
          <p className="text-center text-gray-400 py-10">
            还没有留言，快来留下第一条吧！
          </p>
        )}
      </div>
    </section>
  );
};

export default Guestbook;