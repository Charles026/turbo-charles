import ProjectLayout from "@/components/projectLayout"
import Image from "next/image";
import ImageTest from "@/images/kdCoverImage.png"
import ImageWPS from "@/images/wps365.png"
import ImagePlugin from "@/images/figmaPlugin@2x.png"
import ImageIcon from "@/images/icon@2x.png"
import ImageComponent from "@/images/kdComponent@2x.png"
import ImageSubComponent from "@/images/subComponent@2x.png"
import ImageWPS365Old from "@/images/wps365Old.png"
import ImageIconSOP from "@/images/icon-sop.png"
import ImagePluginSOP from "@/images/plugin-sop.png"
import ImagePluginUI from "@/images/plugin-ui.png"
import ImageSVG from "@/images/svg-code.png"
import ImageKDWwebCode from "@/images/KDweb-code.png"

 
function ProjectPage() {
  return (
    <div>
      {/* 页面最顶大标题 */}
      <div className="w-full flex justify-center mt-[80px] mb-[70px]">
        <h1 style={{ fontSize:32 , fontWeight: 700 }}>KDesign 金山办公设计系统</h1>
      </div>
      {/* 头图 */}
      <div className="flex justify-center mb-[48px] px-4 sm:px-6 md:px-8">
        <Image src={ImageTest} alt="KDesign Banner" width={1200} height={400} className="rounded-2xl w-full max-w-[1200px]" />
      </div>

      {/* 版心内容 */}
      <div className="mx-auto px-4 sm:px-6 md:px-8" style={{ maxWidth: 1000 }}>
        {/* 项目信息区 */}
        <div className="project-info grid grid-cols-2 gap-y-6 gap-x-[20px] mb-[70px]">
          <div>Role</div>
          <div className="font-semibold">Core Contributor</div>
          <div>Timeline</div>
          <div className="font-semibold">
           2022-2023
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
            <Image src={ImageWPS365Old} alt="UI 和体验一致性问题说明" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <ul className="list-disc pl-6 mb-[28px] space-y-2">
              <li>界面设计混乱：产品线间视觉差异大，缺乏品牌一致性</li>
              <li>交互体验割裂：相似功能操作方式不统一，增加学习成本</li>
              <li>设计规范缺失：缺乏统一设计语言，设计决策随意</li>
              <li>组件复用率低：组件独立开发，重复工作且质量参差</li>
            </ul>

            <h3 className="text-lg font-semibold">资源冗余、协作效率低下和规格不统一</h3>
            <Image className="rounded-2xl" src={ImageIcon} alt="资源冗余、不一致问题说明" style={{ width: '100%', height: 'auto' }} />
            <ul className="list-disc pl-6 mb-[28px] space-y-2">
              <li>设计师-设计师：资源管理混乱，重复绘制且命名不规范，复用效率低</li>
              <li>设计师-开发：点对点交付缺乏规范，资源唯一性和信息准确性难保证</li>
              <li>开发-开发：资源管理机制缺失，获取存储冗余，影响开发效率</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-[42px]">我做了什么设计/开发贡献</h2>
            <h3 className="text-lg font-semibold">1. UI组件库的搭建</h3>
            <Image src={ImageComponent} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <Image src={ImageSubComponent} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <ul className="space-y-4">
              <li><strong>Base UI Library 框架</strong>：构建了完整的组件库体系，对基础组件库和业务组件库进行解耦，实现组件库的统一框架</li>
              <li><strong>Design Token 设计参与</strong>：参与设计变量体系的建立，实现颜色、字体、间距等设计元素的统一管理，确保跨平台设计一致性</li>
            </ul>

            <h3 className="text-lg font-semibold mt-[28px]">2. KD 图标构建流程 SOP：从 Figma 到多端组件的标准化交付路径</h3> 
            <Image src={ImageIconSOP} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />

            <Image src={ImagePluginSOP} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <Image src={ImagePluginUI} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <Image src={ImageSVG} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />

            <p className="leading-relaxed">为提升图标资产在设计与开发间的交付效率与一致性，我重点参与构建了 KD 图标构建标准流程（SOP）。流程起始于设计侧，在 Figma 中维护图标组件，通过图标插件生成可导出的 SVG 资源。所有图标代码由插件统一推送至 Git 仓库（KD Icon Git），通过构建脚本转译为适配多端框架的组件形式（如 React、Vue2、Vue3、QT）。开发侧基于组件库同步更新，在业务开发中按需调用，统一接入产品体系，最终完成入库管理。
            <br/>
            该流程实现了图标组件的“一次设计，多端复用”，保障了资源版本统一、更新可控、调用便捷，为后续 AI 组件视觉标准建设与平台设计资产积累提供了可扩展的协作基础。</p>

            <h3 className="text-lg font-semibold mt-[28px]">3. KDesign 文档撰写和官网开发</h3>
            <div className="flex flex-col gap-[28px]">
            <Image src={ImageKDWwebCode} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
            <video className="rounded-2xl mt-[16px]"
              src="/videos/kd.mp4"
              width={1200}
              height={400}
              controls
              muted
              playsInline
            />
          </div>
            <p>选用 Docusaurus 作为文档框架，并开发了 KDesign 文档官网，为设计师和开发提供详细的组件使用指南和最佳实践。</p>
          </div>
        </section>

        {/* 项目总结 */}
        <section className="mb-[70px] flex flex-col gap-[28px]">
          <h2 className="text-2xl font-semibold">总结</h2>
          <Image src={ImageWPS} alt="" style={{ width: '100%', height: 'auto' }} className="rounded-2xl" />
          <p className="leading-relaxed">
            我们通过构建 <span className="font-bold text-purple-600">87 项标准化组件</span>和<span className="font-bold text-purple-600">图标工程化项目</span>（清理近万个冗余图标），显著提升了设计和开发效率，为 WPS 家族产品带来统一的用户体验。围绕家族感展开全产品线视觉体验升级，通过统一的界面语言，让用户在新版本首页、新建、组件界面等关键流程中感受到一致的设计体验。以&quot;秩序&quot;为核心，建立标准化的层次规范和控件规范，为全平台产品提供统一的设计标准，确保设计语言的一致性。
          </p>
        </section>

      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage;
