export interface Project {
  id: number;
  title: string;
  summary: string;
  logoText: string;
  logoColor: string;
  detail: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '尝尝咸淡RAG系统',
    summary: '设计并实现自适应状态机 RAG 系统，解决复杂多跳问答场景下的检索幻觉与上下文丢失问题',
    logoText: 'AG',
    logoColor: '#9BE7BF',
    detail:
      '为解决大模型在复杂多跳（Multi-hop）问答中检索召回率低、易引入噪声导致的幻觉问题，自主设计并实现了一套基于 LangGraph 状态机调度的高级自适应纠错 RAG 工程系统。系统创新性地采用了意图路由（Router Node）、知识图谱+向量数据库混合检索（Retriever Node）、外部工具联网检索（Tool Node）以及自适应答案质量评估（Generator Node）的环形控制流结构。通过异步多线程优化，实现混合检索召回率（Hit Rate）提升 28%，大模型生成幻觉率降低 35%，系统端到端首字延迟（TTFT）降低 40%。',
    tags: ['FastAPI', 'LangGraph', 'LangChain', 'Neo4j GraphDB', 'Chroma DB', 'RAG / Self-RAG', 'Agent Tool Calling'],
    link: '#',
  },
  {
    id: 2,
    title: 'Vibe Coding 个人作品集网站',
    summary: '基于 Vite + React 的极简高交互个人作品集，支持响应式布局、视差卡片堆叠与 CI/CD 自动化全球部署',
    logoText: 'VC',
    logoColor: '#C6A6EA',
    detail:
      '旨在探索 AI 辅助工程（Vibe Coding）范式下的高效研发与交付。项目采用 Vite + React 19 + TypeScript 进行核心架构，自主设计了防抖监听与 requestAnimationFrame 帧同步的状态控制逻辑，实现 60 FPS 的流畅视差卡片堆叠和文字无限走马灯动效；页面设计遵循极简手绘风（Neubrutalism），对静态资源进行 Gzip 深度压缩，LightHouse 性能跑分达 98+，并通过 GitHub Actions 与 Netlify 实现了秒级 CI/CD 全球自动化构建部署。',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Netlify CI/CD', 'Web Performance'],
    link: '#',
  },
  {
    id: 3,
    title: '霉豆腐摆摊助手移动端系统',
    summary: '霉豆腐摆摊助手移动端系统(开发中)',
    logoText: 'GM',
    logoColor: '#EFB9B3',
    detail:
      '本项目旨在为流动小微摊贩在户外多移动设备、弱网甚至是完全断网环境下，提供高可用的订单统计、账务核算及实时位置共享服务。目前正在基于 React Native 与 Node.js 异步后端进行核心功能的开发。为保障数据的可靠性，设计了基于本地 SQLite 的“离线缓存队列”，确保无网状态下的交易数据被完整记录并在联网后秒级自动同步；同时设计了基于 WebSocket 的动态位置同步系统，满足摊贩流动作业的高实时性需求。',
    tags: ['React Native', 'Node.js', 'WebSocket', 'SQLite', 'Offline-First'],
    link: '#',
  },
  {
    id: 4,
    title: '智慧医疗微信小程序',
    summary: '高并发智慧就医与日常健康监测系统，实现就诊全流程数字化闭环与 QPS 优化',
    logoText: 'ZH',
    logoColor: '#F1D277',
    detail:
      '针对传统医疗预约挂号排队长、就医流程繁杂以及健康监测缺乏持续追踪的问题，设计并实现了一套包含微信原生小程序与 Node.js 异步服务端的智慧医疗系统。核心包含可视化健康数据监测（Canvas 绘图模块）、门诊预约挂号以及日程服药提醒功能。为了应对门诊号源瞬时高并发请求，在服务端引入了 Redis 消息队列作为挂号排队缓冲区，成功将核心预约接口的吞吐量（QPS）提升了 45%，日常服药提醒成功触达率达 100%，极大地缩短了患者线下候诊排队时间。',
    tags: ['微信小程序', 'Node.js', 'Redis Queue', 'Canvas API', 'High Concurrency'],
    link: '#',
  },
];
