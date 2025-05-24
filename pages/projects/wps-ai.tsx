import ProjectLayout from "@/components/projectLayout"
import Image from "next/image";
import ImageEmpty from "@/images/emptyImage.png"

function ProjectPage() {
  return (
    <div>
      {/* 页面最顶大标题 */}
      <div className="w-full flex justify-center mt-[80px] mb-[70px]">
        <h1 style={{ fontSize:32 , fontWeight: 700 }}>WPS AI 2.0 设计范式升级</h1>
      </div>
      {/* 头图 */}
      <div className="flex justify-center mb-[48px] px-4 sm:px-6 md:px-8">
        <Image 
          src={ImageEmpty}
          width={1200}
          height={400}
          alt="WPS AI 2.0 Cover"
          className="rounded-2xl w-full max-w-[1200px]"
        />
      </div>

      {/* 版心内容 */}
      <div className="mx-auto px-4 sm:px-6 md:px-8" style={{ maxWidth: 1000 }}>
        {/* 项目信息区 */}
        <div className="project-info grid grid-cols-2 gap-y-6 gap-x-[20px] mb-[70px]">
          <div>Role</div>
          <div className="font-semibold">Design Lead</div>
          <div>Timeline</div>
          <div className="font-semibold">
            2023-2025
          </div>
        </div>

        <hr className="border-t border-neutral-600 opacity-40 my-0 mb-[70px]" />

        {/* 项目介绍 */}
        <section className="mb-[70px]">
          <h2 className="text-2xl font-semibold mb-[28px]">项目介绍</h2>
          <p className="leading-relaxed">WPS AI 2.0 是金山办公在 AI 领域的重要升级，旨在通过全新的设计范式提升用户体验和效率。这个项目将重新定义用户与 AI 的交互方式，打造更智能、更自然的办公体验。</p>
        </section>

        {/* 阶段/章节 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[28px]">
            <h2 className="text-2xl font-semibold">设计目标</h2>
            <div className="space-y-4 mb-[28px]">
              <p className="leading-relaxed">WPS AI 2.0 的设计升级主要围绕以下几个核心目标：</p>
              <ul className="list-disc pl-4 space-y-2">
                <li className="leading-relaxed">提升 AI 交互的自然性和流畅度</li>
                <li className="leading-relaxed">优化用户创作和工作效率</li>
                <li className="leading-relaxed">建立统一的设计语言和交互范式</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 项目总结 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <h2 className="text-2xl font-semibold">项目总结</h2>
          <p className="leading-relaxed">WPS AI 2.0 的设计升级不仅是一次界面更新，更是对 AI 交互范式的重新思考。通过这次升级，我们希望能够为用户带来更智能、更高效的办公体验。</p>
        </section>

      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage; 