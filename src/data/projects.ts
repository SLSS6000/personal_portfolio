import project1Image from '../assets/project1-1.png';
import project2Image from '../assets/project1-2.png';
import project3Image from '../assets/project1-3.png';



export interface ProjectImage {
  src: string;
  alt: string;
  size: 'large' | 'medium' | 'small'; // 定义图片大小
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: ProjectImage[];
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '文字文字文字文字文字文字',
    description: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字',
    images: [
      { src: '#', alt: '项目截图1', size: 'large' },
      { src: '#', alt: '项目截图2', size: 'medium' },
      { src: '#', alt: '项目截图3', size: 'small' },
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 2,
    title: '文字文字文字文字文字文字',
    description: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字',
    images: [
      { src: '#', alt: '项目截图1', size: 'medium' },
      { src: '#', alt: '项目截图2', size: 'large' },
      { src: '#', alt: '项目截图3', size: 'medium' },
    ],
    tags: ['React', 'Firebase', 'TypeScript'],
    link: '#'
  },
  {
    id: 3,
    title: '文字文字文字文字文字文字',
    description: '文字文字文字文字文字文字文字文字文字文字文字文字文字',
    images: [
      { src: '#', alt: '项目截图1', size: 'small' },
      { src: '#', alt: '项目截图2', size: 'large' },
      { src: '#', alt: '项目截图3', size: 'small' },
    ],
    tags: ['React', 'D3.js', 'Python'],
    link: '#'
  },
  {
    id: 4,
    title: '个人作品集网站',
    description: 'Vibecoding 打造了一个现代化个人作品集网站，基于 React + TypeScript + Tailwind CSS 构建，最后使用vercel部署上线。网站充分利用 React 的组件化与 Hooks 管理页面状态与交互，TypeScript 保证了代码的可维护性与类型安全，Tailwind CSS 则实现了高效、一致且响应式的视觉风格。整体包含项目展示、技能图谱、博客随笔及联系我等模块，并针对移动端与桌面端进行了全面适配。',
    images: [
      { src: project1Image, alt: '作品集网站', size: 'large' },
      { src: project2Image, alt: '移动端预览', size: 'medium' },
      { src: project3Image, alt: '深色模式', size: 'small' },
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#'
  }
];
