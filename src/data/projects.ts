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
    summary: '基于 FastAPI 与 LangGraph 构建多智能体混合检索 RAG 系统',
    logoText: 'AG',
    logoColor: '#9BE7BF',
    detail:
      '项目依托 LangGraph 搭建可分支、可循环、支持断点恢复的 Agent 任务工作流，结合 FastAPI 异步接口实现混合向量 + 图谱检索，完成复杂业务问答的任务路由、工具调用与统一异常管理。',
    tags: ['FastAPI', 'LangGraph', 'LangChain', 'Agent', 'Tool Calling', 'Neo4j', 'Chroma', 'DeepSeek LLM'],
    link: '#',
  },
  {
    id: 2,
    title: 'Vibe Coding 个人作品集网站',
    summary: '使用 Vite、React 与 Tailwind CSS 构建的现代化个人作品集',
    logoText: 'VC',
    logoColor: '#C6A6EA',
    detail:
      '本作品集网站通过低代码 Vibe Coding 快速搭建，整体采用柔和干净的卡片视觉风格，统一手绘简约设计语言；页面划分项目展示区、技术介绍区，每个项目独立卡片承载标题、项目简介、核心技术标签，可跳转对应 Github 源码仓库；站点为纯静态页面，无后端依赖，轻量化部署至 Netlify，加载速度快、兼容性强，用于集中沉淀、展示本人 RAG、大模型智能体、FastAPI 后端等 AI 全栈实战项目。',
    tags: ['Vibe Coding', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Netlify'],
    link: '#',
  },
  {
    id: 3,
    title: '霉豆腐摆摊APP(Demo)',
    summary: '霉豆腐摆摊APP(开发中)',
    logoText: 'GM',
    logoColor: '#EFB9B3',
    detail:
      '',
    tags: ['', '', ''],
    link: '#',
  },
  {
    id: 4,
    title: '智慧医疗微信小程序',
    summary: '基于微信小程序的轻量级个人健康管理与移动医疗预约挂号系统',
    logoText: 'ZH',
    logoColor: '#F1D277',
    detail:
      '本项目是一款面向个人及家庭的一站式智慧医疗微信小程序，旨在为用户提供便捷的移动就医和日常健康管理服务。系统主要包含以下核心功能板块：健康数据监测、移动预约挂号、药品便捷查询、健康资讯科普、日程服药提醒...',
    tags: ['Native Mini Program Framework', 'Node.js'],
    link: '#',
  },
];
