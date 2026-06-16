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
    title: 'AI Town - Pepper & Carrot 奇幻世界',
    summary: '基于多智能体系统的交互式奇幻游戏小镇，融合 LLM 驱动的 NPC 自主行为、记忆系统与好感度机制，打造沉浸式角色扮演体验。',
    logoText: 'AI',
    logoColor: '#EFB9B3',
    detail:
      'AI Town 采用前后端分离架构，前端基于 Godot 4.x + GDScript 构建交互式 2D 场景，后端使用 FastAPI + Python 3.10+ 提供异步 RESTful API。核心创新是多智能体系统，每个 NPC 都是独立的 AI Agent，基于 HelloAgents 框架集成阿里云通义千问大模型，拥有个性化角色设定和独立记忆空间。设计了双层记忆架构（工作记忆 + 情景记忆），通过 Qdrant 向量数据库实现语义检索和智能遗忘机制。好感度系统使用 LLM 驱动的情感分析实现五级关系评价，动态影响对话内容。批量对话生成器将 3 次 API 调用优化为 1 次，节省 66% Token 消耗并降低延迟至 1-2 秒。NPC 自主行为通过 Godot CharacterBody2D 物理系统实现巡逻、伙伴跟随和交互三种模式。混合存储架构支持从 JSON 文件无缝切换到 Qdrant + Neo4j，日志系统完整追踪交互生命周期。系统性能优异：API 响应 1.2 秒、前端稳定 60 FPS、单实例支持 10+ 玩家在线，具备良好的水平扩展和 MOD 支持能力。',
    tags: ['Godot', 'FastAPI', 'HelloAgents', 'Qdrant', 'Neo4j'],
    link: '#',
  },
  {
    id: 3,
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
