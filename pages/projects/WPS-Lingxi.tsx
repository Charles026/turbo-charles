import ProjectLayout from "@/components/projectLayout"
import Image from "next/image";
import ImageEmpty from "@/images/emptyImage.png"
import ImageAippt from "@/images/aippt.png"



function ProjectPage() {
  return (
    <div>
      {/* 页面最顶大标题 */}
      <div className="w-full flex justify-center mt-[80px] mb-[70px]">
        <h1 style={{ fontSize:32 , fontWeight: 700 }}>WPS 灵犀主站</h1>
      </div>
      {/* 头图 */}
      <div className="flex justify-center mb-[48px] px-4 sm:px-6 md:px-8">
        <video 
          src="/videos/lingxi-transition.mp4"
          width={1200}
          height={400}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl w-full max-w-[1200px]"
        />
      </div>

      {/* 版心内容 */}
      <div className="mx-auto px-4 sm:px-6 md:px-8" style={{ maxWidth: 1000 }}>
        {/* 项目信息区 */}
        <div className="project-info grid grid-cols-2 gap-y-6 gap-x-[20px] mb-[70px]">
          <div>Role</div>
          <div className="font-semibold">Design Lead</div>
          <div>Team</div>
          <div className="font-semibold">
            WPS AI 设计组（6人）
          </div>
        </div>

        <hr className="border-t border-neutral-600 opacity-40 my-0 mb-[70px]" />

        {/* 项目介绍 */}
        <section className="mb-[70px]">
          <h2 className="text-2xl font-semibold mb-[28px]">项目介绍</h2>
          <p className="leading-relaxed">WPS 灵犀是金山办公推出的 AI Native 办公应用，专注帮助提升用户创作阅读等办公体验和效率。类似的竞品有如豆包、Kimi、ChatGPT…WPS 灵犀的独特优势在与融入 WPS 云文档体系，以及有着天然的文档编辑格式壁垒，与其他竞争对手形成差异化。</p>
        </section>

        {/* 阶段/章节 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <h2 className="text-2xl font-semibold">WPS 灵犀在快速迭代中面临的问题</h2>
          <div className="flex flex-col gap-[28px]">
            <h3 className="text-lg font-semibold">框架设计</h3>
            <Image src={ImageEmpty} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <p className="leading-relaxed">What：框架设计没有考虑到的一些点 <br/> Why：设计背景、内部项目孵化过程中，对设计的阻力</p>

            <h3 className="text-lg font-semibold">与 AI 对话流的一些问题</h3>
            <Image src={ImageEmpty} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <Image src={ImageEmpty} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <p className="leading-relaxed">讲讲一些对话流没有考虑到的细节点</p>

            <h2 className="text-2xl font-semibold mt-[42px]">在构建灵犀更好的产品体验过程中，我和我的 Team 做了什么设计：</h2>
            <h3 className="text-lg font-semibold">1. 框架设计的分析判断和采用</h3>
            <Image src={ImageEmpty} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <Image src={ImageEmpty} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <ul>
              <li>设计目标的变更</li>
              <li>竞品分析和设计决策</li>
            </ul>
          </div>
        </section>

        {/* 项目总结 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <h2 className="text-2xl font-semibold">总结</h2>
          <Image src={ImageAippt} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
          <p className="leading-relaxed">一些关于AI设计的思考和仍在继续的一些事情</p>

          <h2 className="text-2xl font-semibold">试试 WPS 灵犀 <a href="https://365.kdocs.cn/3rd/lingxi/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:opacity-80 transition-opacity">lingxi.wps.cn</a></h2>
        </section>

      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage;
