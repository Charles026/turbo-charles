import ProjectLayout from "@/components/projectLayout"
import Image from "next/image";
import ImageTest from "@/images/kdCoverImage.png"
import ImageEmpty from "@/images/emptyImage.png"
import ImageWPS from "@/images/wps365.png"
import ImagePlugin from "@/images/figmaPlugin@2x.png"
import ImageIcon from "@/images/icon@2x.png"
import ImageComponent from "@/images/kdComponent@2x.png"
import ImageSubComponent from "@/images/subComponent@2x.png"
import ImageWPS365Old from "@/images/wps365Old.png"

 
function ProjectPage() {
  return (
    <div>
      {/* 页面最顶大标题 */}
      <div className="w-full flex justify-center mt-[80px] mb-[70px]">
        <h1 style={{ fontSize:32 , fontWeight: 700 }}>KDesign 金山办公设计系统</h1>
      </div>
      {/* 头图 */}
      <div className="flex justify-center mb-[48px]">
        <Image src={ImageTest} alt="KDesign Banner" width={1200} height={400} />
      </div>

      {/* 版心内容 */}
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        {/* 项目信息区 */}
        <div className="project-info grid grid-cols-2 gap-y-6 gap-x-[20px] mb-[70px]">
          <div>Role</div>
          <div className="font-semibold">Core Contributor</div>
          <div>Core Team</div>
          <div className="font-semibold">
            张友明、肖载嘉、陈传林、唐俊华、李龙浩。React 和 Vue、QT 开发以及测试同学
          </div>
        </div>

        <hr className="border-t border-neutral-600 opacity-40 my-0 mb-[70px]" />

        {/* 项目介绍 */}
        <section className="mb-[70px]">
          <h2 className="text-2xl font-semibold mb-[28px]">项目介绍</h2>
          <p>KDesign 金山办公设计系统主要服务于金山办公旗下办公产品的体验设计和技术实现，并为公司内部的设计、交互、产品、开发、测试等角色提供一站式解决方案，包括组件、指南和工具等，旨在实现金山办公产品体验的一致性，以提升团队协作效率。</p>
        </section>

        {/* 阶段/章节 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <h2 className="text-2xl font-semibold">WPS 家族感版本面临的问题</h2>
          <div className="flex flex-col gap-[28px]">
            <h3 className="text-lg font-semibold">UI 和体验一致性问题</h3>
            <Image src={ImageWPS365Old} alt="UI 和体验一致性问题说明" style={{ width: '100%', height: 'auto' }} />
            <p>what <br/> why</p>

            <h3 className="text-lg font-semibold">资源冗余、协作效率低下和规格不统一</h3>
            <Image className="" src={ImageIcon} alt="资源冗余、不一致问题说明" style={{ width: '100%', height: 'auto' }} />
            <p className="space-y-2">
              <span className="block">设计师-设计师：设计资源管理混乱，存在重复绘制、命名不规范等问题，导致资源复用效率低下</span>
              <span className="block">设计师-开发：采用点对点的原始交付方式，缺乏统一规范，难以保证资源唯一性和信息传递的准确性</span>
              <span className="block">开发-开发：缺乏统一的资源管理机制，在资源获取、存储和去重方面存在冗余，影响开发效率</span>
            </p>

            <h2 className="text-2xl font-semibold mt-[42px]">我做了什么设计/开发贡献</h2>
            <h3 className="text-lg font-semibold">1. UI组件库的搭建参与</h3>
            <Image src={ImageComponent} alt="" style={{ width: '100%', height: 'auto' }} />
            <Image src={ImageSubComponent} alt="" style={{ width: '100%', height: 'auto' }} />
            <ul>
              <li>Base UI Library 框架</li>
              <li>Design Token 设计参与 </li>
            </ul>

            <h3 className="text-lg font-semibold">2. 图标工程化</h3>            
            <Image className="mt-[16px]" src={ImagePlugin} alt="" style={{ width: '100%', height: 'auto' }} />
            <p>负责图标工程化体系建设，包括开发 SVG 图标自动化处理 API 接口，以及 Figma 图标规范化插件。通过工具链的构建，实现了图标资源的标准化管理和高效复用。</p>

            <h3 className="text-lg font-semibold">3. KDesign 文档撰写和官网开发</h3>
            <div className="flex flex-col gap-[28px]">
            <video className="rounded-xl mt-[16px]"
              src="/videos/kd.mp4"
              width={1200}
              height={400}
              controls
              muted
              playsInline
            />
          </div>
            <p>方案选型、开发学习</p>
          </div>
        </section>

        {/* 项目总结 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <h2 className="text-2xl font-semibold">总结</h2>
          <Image src={ImageWPS} alt="" style={{ width: '100%', height: 'auto' }} />
          <p>数据体现</p>
        </section>

      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage;
