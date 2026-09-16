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
    title: '任务管理系统测试项目',
    summary: '基于Spring Boot后端的完整软件测试项目',
    logoText: 'TS',
    logoColor: '#9BE7BF',
    detail:
      'Todo任务管理系统是一个基于 Spring Boot + MyBatis-Plus + MySQL 构建的后端服务，提供用户管理、任务管理、分类管理、日期筛选等核心功能。本项目为该系统提供完整软件测试，152条测试用例、17个接口全覆盖，包含功能测试、接口测试、安全测试、缺陷管理全套产出。包含测试用例设计、Postman接口测试集合、缺陷管理体系、自动化测试等。',
    tags: ['Postman', 'Pytest', 'Requests'],
    link: '#',
  },
  
  {
    id: 3,
    title: 'Fake Store API 接口自动化测试项目',
    summary: '基于 Fake Store API（开源电商测试接口）实现核心电商流程测试。',
    logoText: 'TS',
    logoColor: '#C6A6EA',
    detail:
      '项目采用‘正向+负向’结合的用例设计思路，确保覆盖全面：正向设计合理的用例成功创建商品，注册用户，创建购物车等，负向使用错误的价格和邮箱格式测试接口的异常处理能力。',
    tags: ['Postman', 'Pytest', 'Requests'],
    link: '#',
  },
  {
    id: 2,
    title: 'AI Town - Pepper & Carrot 奇幻世界',
    summary: '参与后端业务逻辑实践；熟悉复杂业务流程，练习业务梳理、接口分析，积累对复杂系统的测试分析思维。',
    logoText: 'AI',
    logoColor: '#EFB9B3',
    detail:
      '赛博小镇是一款结合Godot游戏引擎与HelloAgents多智能体框架的AI驱动2D游戏。项目以《Pepper & Carrot》奇幻世界为背景，包含女巫学徒胡椒、魔法猫胡萝卜和香料商人七味三个AI NPC角色。系统通过FastAPI后端提供RESTful API服务，集成LLM实现自然语言对话、短期/长期记忆管理、情感分析和动态好感度系统（5个等级）。NPC具备自主行为能力，每30秒生成独立对话内容，支持玩家实时交互。数据存储采用Qdrant向量数据库（记忆检索）、Neo4j图数据库（关系网络）和SQLite（本地持久化），形成完整的多智能体游戏解决方案。',
    tags: ['Godot', 'FastAPI + Python 3.10+', 'HelloAgents', 'DashScope API', 'Qdrant', 'Neo4j', 'SQLite'],
    link: '#',
  },
  {
    id: 4,
    title: '智慧医疗微信小程序',
    summary: '基于微信小程序原生开发的轻量级智慧医疗系统，实现在线问诊、医生预约与健康信息管理功能。',
    logoText: 'APP',
    logoColor: '#F1D277',
    detail:
      '基于微信小程序原生框架开发的智慧医疗应用，包含医生信息展示、在线预约挂号、健康资讯浏览与个人健康管理等模块。系统采用多页面结构设计，通过 WXML + WXSS + JavaScript 实现前端交互逻辑，并结合组件化页面拆分提升代码可维护性。项目实现了从首页展示、医生详情页到预约流程的完整用户路径，优化了医疗场景下的操作步骤，使用户能够快速完成挂号与信息查询流程，具备基础的移动端产品设计与前端工程实现能力。',
    tags: ['微信小程序', 'Node.js', 'JavaScript'],
    link: '#',
  },
];
