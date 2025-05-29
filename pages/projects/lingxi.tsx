import ProjectLayout from "@/components/projectLayout"
import Image from "next/image";
import ImagePreview from "@/components/ImagePreview";
import ImageEmpty from "@/images/emptyImage.webp"
import ImageAippt from "@/images/aippt.webp"
import ImageHome from "@/images/lingxihome.webp"
import ImageMarkdown from "@/images/markdown.webp"
import ImageMarkdownPage from "@/images/markdownPage.webp"
import ImageInput from "@/images/input.webp"
import ImageInput2 from "@/images/input2.webp"
import ImageAction from "@/images/actions.webp"
import ImageLoading from "@/images/loading.webp"
import { useState } from "react";




function ProjectPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div>
      {/* 页面最顶大标题 */}
      <div className="w-full flex justify-center mt-[80px] mb-[70px]">
        <h1 style={{ fontSize:32 , fontWeight: 700 }}>WPS 灵犀主站设计升级</h1>
      </div>
      {/* 头图 */}
      <div className="flex justify-center mb-[48px] px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-[1200px] rounded-2xl overflow-hidden">
          {!videoLoaded && (
            <div className="skeleton w-full h-[800px] absolute top-0 left-0 rounded-2xl"></div>
          )}
          <video 
            src="/videos/lingxi-transition.mp4"
            width={1200}
            height={400}
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
            onLoadedData={() => setVideoLoaded(true)}
          />
        </div>
      </div>

      {/* 版心内容 */}
      <div className="mx-auto px-4 sm:px-6 md:px-8" style={{ maxWidth: 1000 }}>
        {/* 项目信息区 */}
        <div className="project-info grid grid-cols-2 gap-y-6 gap-x-[20px] mb-[70px]">
          <div>Role</div>
          <div className="font-semibold">Design Lead</div>
          <div>Timeline</div>
          <div className="font-semibold">
            2024-2025
          </div>
        </div>

        <hr className="border-t border-neutral-600 opacity-40 my-0 mb-[70px]" />

        {/* 项目介绍 */}
        {/*<section className="mb-[70px]">
          <h2 className="text-2xl font-semibold mb-[28px]">项目介绍</h2>
          <p className="leading-relaxed">WPS 灵犀是金山办公推出的 AI Native 办公应用，专注帮助提升用户创作阅读等办公体验和效率。类似的竞品有如豆包、Kimi、ChatGPT…WPS 灵犀的独特优势在与融入 WPS 云文档体系，以及有着天然的文档编辑格式壁垒，与其他竞争对手形成差异化。</p>
        </section>*/}

        {/* 阶段/章节 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[28px]">
          <h2 className="text-2xl font-semibold">围绕 AI 办公创作效率而设计</h2>
          
          <div className="space-y-4 mb-[28px]">
              <p className="leading-relaxed">在 Kimi 热度高涨时期，我们内部孵化了一款脱离 WPS AI 应用体系的 AI Agent 类产品，支持搜索 WPS 文件、总结文档、创建会议等操作。当时产品名称还没有命名为&ldquo;灵犀&rdquo;。设计团队在极短时间内根据竞品做出快速原型并上线实验版本。</p>

              <p className="leading-relaxed">随着时间推进至 2024 年下半年，豆包成为更受关注的竞品， <span className="font-semibold"> AI 提升创作阅读效率 </span> 的核心价值逐步明晰，产品正式定名为「WPS 灵犀」。</p>

              <p className="leading-relaxed">我作为设计负责人，以 AI 驱动办公创作效率为中心命题，带领团队重构主站体验，以下是一些核心的设计点。</p>
            </div>

            <div className="flex flex-col gap-[28px]">
            <h2 className="text-2xl font-semibold">1. LUI 的起点 —— 输入框设计</h2>
            <ImagePreview src={ImageInput} alt="" style={{ width: '100%', height: 'auto' }} />
            <ImagePreview src={ImageInput2} alt="" style={{ width: '100%', height: 'auto' }} />
            <p className="leading-relaxed">
            通过系统梳理并优化输入框的交互结构，我们明确了其&ldquo;自然语言输入—意图推荐—能力挂载&rdquo;的核心模型。尽管组件设计并非原创，但这有助于我们设计连接用户意图与 AI 能力的关键起点。
            </p>
            </div>

            <div className="flex flex-col gap-[28px]">
            <h2 className="text-2xl font-semibold mt-[28px]">2. 为对话流优化 </h2>


            <ImagePreview src={ImageMarkdownPage} alt="" style={{ width: '100%', height: 'auto' }} />
            <ImagePreview src={ImageMarkdown} alt="" style={{ width: '100%', height: 'auto' }} />
            <div className="space-y-4">
              <p className="leading-relaxed">基于文字亲密性原则，我们优化了灵犀 Markdown 消息流的文本排版，提升了长文输出的可读性与信息层次感。具体设计策略包括：优化标题字号与行高、使用斐波那契节奏间距、响应式字号策略</p>
            </div>


            <ImagePreview src={ImageLoading} alt="" style={{ width: '100%', height: 'auto' }} />
            <video 
          src="/videos/loading.mp4"
          width={1200}
          height={400}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl w-full max-w-[1200px]"
        />
            <ul className="list-disc pl-4 space-y-2">
              <li className="leading-relaxed">基于 AI 推理流程的加载特性，我们设计了具节奏感的加载动画，将&ldquo;意图识别—能力调用—内容输出&rdquo;过程可视化。</li>
              
            </ul>
            <ImagePreview src={ImageAction} alt="" style={{ width: '100%', height: 'auto' }} />
            <ul className="list-disc pl-4 space-y-2">
             
              <li className="leading-relaxed">支持会话内持续创作，例如基于搜索结果继续生成文档，保持创作流程的连贯性</li>
            </ul>
            </div>
            <h2 className="text-2xl font-semibold mt-[28px]">3. 由创作任务驱动的灵犀首页设计</h2>
            <div className="w-full overflow-hidden">
              <ImagePreview src={ImageHome} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">首页设计以用户创作任务为核心，主要包含两个关键模块：</p>
              <ul className="list-disc pl-4 space-y-2">
                <li className="leading-relaxed"><span className="font-semibold">最近任务建议区</span>：基于用户历史行为，推荐可能需要继续的文档创作任务，帮助用户快速接续工作流</li>
                <li className="leading-relaxed"><span className="font-semibold">创作推荐</span>：通过创作意图推荐，给用户提供引导触点</li>
              </ul>
            </div>

            

         
          </div>
        </section>

        {/* 项目总结 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <h2 className="text-2xl font-semibold">一些思考</h2>
          <ImagePreview src={ImageAippt} alt="" style={{ width: '100%', height: 'auto' }} />
          <p className="leading-relaxed">在灵犀的设计中，我们始终关注 AI 是否真正理解用户的任务意图，而不仅是功能的堆叠。围绕 AIPPT 等关键场景，我们持续优化智能交互的协作感与可控性，让 AI 成为创作中的思考伙伴。与此同时，我们仍持续推进超过 100 项走查点，覆盖识别、生成、引导等环节…</p>

          <h2 className="text-2xl font-semibold">试试 WPS 灵犀 <a href="https://lingxi.wps.cn/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:opacity-80 transition-opacity">lingxi.wps.cn</a></h2>
        </section>

      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage;
