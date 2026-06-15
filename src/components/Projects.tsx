import { useState } from 'react';
import { projects, type Project } from '../data/projects';
import heroLuckyCover from '../assets/hero-lucky-cover.png';

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative z-10 bg-[#fbfbfa] py-24 md:py-32">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 mx-auto grid w-[92%] max-w-[1500px] grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.75fr] lg:gap-20">
        <div className="relative min-h-[220px]">
          <div className="sticky top-28">
            <h2 className="text-2xl font-semibold tracking-normal text-gray-900 md:text-4xl">
              项目简介.
            </h2>
            <img src={heroLuckyCover} alt="decoration" className="pointer-events-none mt-6 hidden h-24 w-24 rotate-[-18deg] rounded-full object-cover opacity-80 lg:block" />
          </div>
        </div>

        <div className="space-y-5">
          {projects.map((project) => (
            <ProjectAccordion
              key={project.id}
              project={project}
              isActive={project.id === activeProjectId}
              onSelect={() => setActiveProjectId((currentId) => (currentId === project.id ? null : project.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectAccordion = ({
  project,
  isActive,
  onSelect,
}: {
  project: Project;
  isActive: boolean;
  onSelect: () => void;
}) => {
  return (
    <article
      className={`overflow-hidden rounded-[1rem] border-[1.5px] border-gray-900 bg-[#fbfbfa] shadow-[0_5px_0_#222] transition-all duration-300 ${isActive ? 'translate-y-0' : 'hover:-translate-y-1 hover:shadow-[0_7px_0_#222]'
        }`}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-expanded={isActive}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-gray-900 outline-none transition-colors focus-visible:bg-white md:px-10 md:py-8"
      >
        <span className="w-1/2 shrink-0 break-words text-xl font-semibold leading-tight md:text-3xl">
          {project.summary}
        </span>
        <span className={`shrink-0 text-4xl font-light leading-none transition-transform duration-300 md:text-5xl ${isActive ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-6 pb-8 md:px-10 md:pb-10">
            <div className="mb-7 flex items-center gap-5">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-black text-gray-900 shadow-[3px_4px_0_#f9a8d4]"
                style={{ backgroundColor: project.logoColor }}
              >
                {project.logoText}
              </div>
              <div>
                <h3 className="text-lg text-gray-900 md:text-xl">{project.title}</h3>

              </div>
            </div>

            <p className="max-w-5xl text-lg leading-relaxed text-gray-700 md:text-xl">
              {project.detail}
            </p>

            {project.id === 1 && (
              <div className="mt-8 rounded-2xl border border-gray-900 bg-white p-6 shadow-[3px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                  LangGraph 状态机节点拓扑与数据路由架构 (Self-RAG)
                </p>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between">
                  {/* Step 1 */}
                  <div className="flex-1 rounded-xl border border-gray-300 p-3 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <div className="inline-block rounded-full bg-[#C6A6EA] px-2 py-0.5 text-[10px] font-bold text-gray-900 mb-2 border border-gray-900">1. Router Node</div>
                      <p className="text-xs text-gray-600 leading-relaxed"><strong>意图路由：</strong>评估用户查询是否需要联网搜索、图谱/向量库检索或直接问答。</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center text-gray-400 text-lg font-bold lg:rotate-0 rotate-90">→</div>

                  {/* Step 2 */}
                  <div className="flex-1 rounded-xl border border-gray-300 p-3 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <div className="inline-block rounded-full bg-[#9BE7BF] px-2 py-0.5 text-[10px] font-bold text-gray-900 mb-2 border border-gray-900">2. Retriever Node</div>
                      <p className="text-xs text-gray-600 leading-relaxed"><strong>混合检索：</strong>并发检索 Neo4j 知识图谱与 Chroma 向量数据库，进行上下文融合召回。</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center text-gray-400 text-lg font-bold lg:rotate-0 rotate-90">→</div>

                  {/* Step 3 */}
                  <div className="flex-1 rounded-xl border border-gray-300 p-3 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <div className="inline-block rounded-full bg-[#EFB9B3] px-2 py-0.5 text-[10px] font-bold text-gray-900 mb-2 border border-gray-900">3. Tool Node (Web)</div>
                      <p className="text-xs text-gray-600 leading-relaxed"><strong>检索评估与纠错：</strong>过滤不相关网页与文档；若召回缺失则调用 Tavily Web Search 进行实时补充。</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center text-gray-400 text-lg font-bold lg:rotate-0 rotate-90">→</div>

                  {/* Step 4 */}
                  <div className="flex-1 rounded-xl border border-gray-300 p-3 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <div className="inline-block rounded-full bg-[#F1D277] px-2 py-0.5 text-[10px] font-bold text-gray-900 mb-2 border border-gray-900">4. Generator Node</div>
                      <p className="text-xs text-gray-600 leading-relaxed"><strong>生成与幻觉拦截：</strong>RAG 合成最终问答，并行幻觉检测与支撑度打分，确保知识无漂移。</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;
