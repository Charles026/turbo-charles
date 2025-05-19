import ProjectLayout from "@/components/projectLayout"
// import Image from "next/image";



function ProjectPage() {
  return (
    <div className="flex flex-col items-center">
      {/* 页面最顶大标题 */}
      <div className="w-[1000px] flex flex-col items-center justify-center mt-[80px] mb-[70px]">
        <h1 className="text-center mb-[28px]" style={{ fontSize:32 , fontWeight: 700 }}>Prototyping in WPS</h1>
        <p className="text-center">Protopie 是我最得力的原型设计工具，它让我能够快速构建交互原型并持续迭代优化。在 WPS，我制作了大量原型设计，这里精选了一些最具代表性的案例。这些原型主要使用 Protopie 完成，少数复杂交互则通过 JavaScript 实现。</p>
      </div>
      {/* 版心内容 */}
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        {/* 阶段/章节 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[28px]">
            <video className="border border-gray-200 rounded-xl"
              src="/videos/lingxi-concept.mp4"
              width={1200}
              height={400}
              controls
              muted
              playsInline
            />
            <p>灵犀Concept</p>
            
          </div>

          <div className="flex flex-col gap-[28px]">
            <video  className="border border-gray-200 rounded-xl mt-[16px]"
              src="/videos/quote.mp4"
              width={1200}
              height={400}
              controls
              muted
              playsInline
            />
            <p>WPS Copilot 片段引用概念</p>
          </div>

          <div className="flex flex-col gap-[28px]">
            <video className="border border-gray-200 rounded-xl mt-[16px]"
              src="/videos/data.mp4"
              width={1200}
              height={400}
              controls
              muted
              playsInline
            />
            <p>WPS AI 表格数据分析</p>
          </div>

          <div className="flex flex-col items-center gap-[28px]">
            <video  className="rounded-[48px] border border-gray-200 w-[320px] h-auto object-cover object-center mt-[16px]"
              src="/videos/rtc.mp4"
              width={320}
              height="auto"
              controls
              playsInline
            />
            <p>WPS 移动 RTC</p>
          </div>

          <div className="flex flex-col items-center gap-[28px]">
            <video  className="rounded-[48px] border border-gray-200 w-[320px] h-auto object-cover object-center mt-[16px]"
              src="/videos/note.mp4"
              width={320}
              height="auto"
              controls
              muted
              playsInline
            />
            <p>WPS 移动录音笔记</p>
          </div>

            <div className="flex flex-col items-center gap-[28px]">
            <video  className="rounded-[48px] border border-gray-200 w-[320px] h-auto object-cover object-center mt-[16px]"
              src="/videos/voice.mov"
              controls
              muted
              playsInline
            />
            <p>WPS 录音笔记</p>
          </div>

          <div className="flex flex-col items-center gap-[28px]">
              <video  className="border border-gray-200 rounded-xl mt-[16px] "
              src="/videos/ap多彩.mp4"
              width={1200}
              height={400}
              controls
              muted
              playsInline
            />
            <p>金山文档 AP</p>
          </div>
        </section>
      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage;

