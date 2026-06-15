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
    title: 'RAG 检索增强问答系统（DataWhale 实战项目）',
    summary: '基于向量数据库构建的 RAG 检索增强生成系统，实现外部知识库驱动的智能问答能力。',
    logoText: 'AG',
    logoColor: '#9BE7BF',
    detail:
      '基于 DataWhale《All-in-RAG》第八章实现标准 RAG（Retrieval-Augmented Generation）系统，构建从数据处理到语义检索再到大模型生成的完整 LLM 应用链路，用于解决基于私有知识库的问答任务。系统首先对原始文本进行清洗与切分（Chunking），并通过 Embedding 模型将文本转换为向量表示，存储于向量数据库（如 Chroma / Milvus）。在用户提问时，系统通过语义相似度检索 Top-K 相关文本片段，并将检索结果与用户问题进行 Prompt 组合，输入大语言模型生成最终回答。该系统完整实现了 RAG 的核心四阶段流程（数据处理 → 向量化 → 检索 → 生成），提升了大模型在私有知识场景下的回答准确性与上下文相关性，并具备基础的 AI 应用工程化能力（Pipeline 构建与 API 集成）。',
    tags: ['Python', 'LangChain', 'Chroma/Milvus', 'FastAPI', 'OpenAI/DeepSeek LLM'],
    link: '#',
  },
  {
    id: 2,
    title: 'Vibe Coding 个人作品集网站',
    summary: '基于 Vite + React 构建的响应式个人作品集网站，用于集中展示项目经历与技术能力。',
    logoText: 'VC',
    logoColor: '#C6A6EA',
    detail:
      '基于 Vite + React 构建的现代化个人作品集网站，采用模块化组件结构设计，实现项目展示、个人介绍与联系方式等核心页面功能。通过卡片式布局与滚动交互设计优化信息展示层级，提高内容可读性与视觉一致性。项目包含响应式布局适配不同设备尺寸，并通过 Netlify 进行部署，实现从开发到上线的完整前端工程流程。整体结构强调可扩展性与维护性，支持后续快速新增项目模块与内容更新。',
    tags: ['React', 'Vite', 'TailwindCSS', 'Netlify'],
    link: '#',
  },
  {
    id: 3,
    title: '霉豆腐摆摊助手移动端系统',
    summary: '霉豆腐摆摊助手移动端系统(开发中)',
    logoText: 'GM',
    logoColor: '#EFB9B3',
    detail:
      '',
    tags: ['', '', '', '', ''],
    link: '#',
  },
  {
    id: 4,
    title: '智慧医疗微信小程序',
    summary: '基于微信小程序原生开发的轻量级智慧医疗系统，实现在线问诊、医生预约与健康信息管理功能。',
    logoText: 'ZH',
    logoColor: '#F1D277',
    detail:
      '基于微信小程序原生框架开发的智慧医疗应用，包含医生信息展示、在线预约挂号、健康资讯浏览与个人健康管理等模块。系统采用多页面结构设计，通过 WXML + WXSS + JavaScript 实现前端交互逻辑，并结合组件化页面拆分提升代码可维护性。项目实现了从首页展示、医生详情页到预约流程的完整用户路径，优化了医疗场景下的操作步骤，使用户能够快速完成挂号与信息查询流程，具备基础的移动端产品设计与前端工程实现能力。',
    tags: ['微信小程序', 'Node.js', 'JavaScript'],
    link: '#',
  },
];
