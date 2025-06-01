import ProjectLayout from "@/components/projectLayout"
import ImagePreview from "@/components/ImagePreview";
import ImageEmpty from "@/images/emptyImage.webp"
import { useState } from "react";
import PasswordProtection from "@/components/PasswordProtection";
import Modal from "@/components/Modal";
import { useRouter } from 'next/router';

import ImageChatGPTCanvas from "@/images/chatgpt_canvas.webp"
import ImageUXAIDiagram from "@/images/ux_ai_diagram.webp"
import ImageChatComponent from "@/images/chat-component.webp"
import ImageTheProduct from "@/images/the-product.webp"
import ImageThePPT from "@/images/the-ppt.webp"
import ImageCopilotCover from "@/images/copilot-cover.webp"
 

function ProjectPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(true);
  const router = useRouter();

  const handlePasswordSuccess = () => {
    setIsVerified(true);
    setShowPasswordModal(false);
  };

  const handleModalClose = () => {
    router.push('/');
  };

  const isModalActive = showPasswordModal && !isVerified;

  return (
    <ProjectLayout>
      {/* 页面内容始终渲染，作为模态框的背景 */}
      <div>
        {/* 页面最顶大标题 */}
        <div className="w-full flex justify-center mt-[80px] mb-[70px]">
          <h1 style={{ fontSize:32 , fontWeight: 700 }}>WPS Copilot：基于 LUI + Canvas 的下一代 AI 协作体验</h1>
        </div>
        {/* 头图 */}
        <div className="flex justify-center mb-[48px] px-4 sm:px-6 md:px-8">
          <ImagePreview 
            src={ImageCopilotCover}
            alt="WPS Copilot Cover"
            style={{ width: '100%', height: 'auto' }}
            className="w-full max-w-[1200px]"
            priority
            loading="eager"
          />
        </div>

        {/* 版心内容 */}
        <div className="mx-auto px-4 sm:px-6 md:px-8" style={{ maxWidth: 1000 }}>
          {/* 项目信息区 */}
          <div className="project-info grid grid-cols-2 gap-y-6 gap-x-[20px] mb-[70px]">
            <div>Role</div>
            <div className="font-semibold">Lead Principal Designer</div>
            <div>Timeline</div>
            <div className="font-semibold">
              2025
            </div>
            <div>Scope</div>
            <div className="font-semibold">
            Defined and led the interaction strategy for WPS Copilot, focusing on LUI + Canvas paradigm.
            </div>
          </div>

          <hr className="border-t border-neutral-600 opacity-40 my-0 mb-[70px]" />

          {/* 项目介绍 */}
          <section className="mb-[70px]">
            <h2 className="text-3xl font-extrabold mb-[28px]">The Story</h2>
            <p className="leading-relaxed">
              随着 AI 在办公场景中的普及，用户开始期待与 AI 建立更深入、更自然的协作关系。
            </p>
            <p className="leading-relaxed mt-4">
              ChatGPT Canvas、Microsoft Copilot 等产品提出了新的方向：
              <b>将 LUI 与 Canvas 结合，构建更可控的 AI 协作体验。</b>
            </p>
            <p className="leading-relaxed mt-4">
              我们认为，这是一次重构办公协作范式的机会。
              因此，公司启动 WPS Copilot 项目，我作为设计负责人，尝试在 WPS 中落地一套融合 LUI 与 Canvas 的交互模式，帮助用户以更自由、更透明的方式与 AI 共创。
            </p>
          </section>

          <section className="mb-[70px]">
            <h2 className="text-3xl font-extrabold mb-[28px]">The Problem</h2>
            <p className="leading-relaxed mb-6">
              AI 工具越来越强大，但多数产品仍忽视了三个关键问题：
            </p>
            <ol className="mb-6 pl-6">
              <li className="mb-3 font-bold ">
                1. 用户无法预判 AI 能力
              </li>
              <li className="mb-3 font-bold ">
                2. 协作流程不透明
              </li>
              <li className="mb-3 font-bold ">
                3. 上下文支持弱
              </li>
            </ol>
          </section>

          <section className="mb-[70px]">
            <h2 className="text-3xl font-extrabold mb-[28px]">The Approach</h2>

            <p className="mb-6">面对 AI 智能尚未成熟、用户又难以掌控的交互困境，我们不再假设“AI 很懂”，而是主动设计一套协作机制，让用户掌握节奏、理解系统，并能逐步推进任务。</p>

            <p className="mb-6 font-bold"> 1. 研究业界范式：<span className="font-normal text-base">分析 ChatGPT Canvas、Microsoft Copilot、Notion AI 的控场机制与交互结构 </span></p>
            <ImagePreview loading="lazy" src={ImageChatGPTCanvas} alt="" style={{ width: '100%', height: 'auto' }}  className="mb-6"/>

            <p className="mb-6">以 ChatGPT Canvas 为例，它通过结构化卡片、段级操作入口与<b className="text-purple-500">语义延展设计</b>，构建了可控、可协作、可进化的 AI 交互模式。它不仅提升了用户的掌控感，也为我们构建 WPS Copilot 的 Canvas 协作机制提供了可借鉴的控场范式。 </p>

            
            <p className="mb-6 mt-12 font-bold"> 2. 明确控场设计目标：<span className="font-normal text-base">托起体验低谷 </span></p>

            <ImagePreview loading="lazy" src={ImageUXAIDiagram} alt="" style={{ width: '100%', height: 'auto' }}  className="mb-6"/>
            <div className="mb-6 leading-relaxed">
              这张 U 型曲线反映了 AI 产品中的体验矛盾：<br/>
              <ul className="list-disc list-inside text-left inline-block mb-6">
                <li>在左端，AI 智能有限但行为可预测，用户体验相对可控；</li>
                <li>在右端，AI 足够智能，能够理解复杂意图并自然回应；</li>
                <li>而中间区域，AI &quot;半懂不懂&quot;、又缺乏控场机制，用户最容易迷失、失控、放弃使用。</li>
              </ul>


              <p>WPS Copilot 设计初期正面临这个智能阶段，我们认为：只有通过结构化输出、语义延展设计与控场机制，才能托起这段体验低谷。</p>
          


            <p className="mb-6 mt-12 font-bold"> 3. 定义控场系统的设计策略：<span className="font-normal text-base">将模糊任务拆解为可感知的协作节奏</span></p>



            <ImagePreview loading="lazy" src={ImageChatComponent} alt="" style={{ width: '100%', height: 'auto' }}  className="mb-6"/>

            <p className="mb-6">以「起草报告」为例，我们将复杂任务分解为四段式协作结构 —— 意图识别、思路生成、正文输出、结构反馈。<br/>
            每一步都设计明确的节奏点与可见状态，确保用户在 AI 协作中保持掌控，不再“被动等待”或“中途迷失”。</p>

            </div>

          </section>

          <section className="mb-[70px]">
            <h2 className="text-3xl font-extrabold mb-[28px]">Final Design</h2>
            <ImagePreview loading="lazy" src={ImageTheProduct} alt="" style={{ width: '100%', height: 'auto' }}  className="mb-6"/>
            <ImagePreview loading="lazy" src={ImageThePPT} alt="" style={{ width: '100%', height: 'auto' }}  className="mb-6"/>
          </section>

          

        </div>
      </div>

      {/* 模态框覆盖在内容之上 */}
      <Modal 
        isOpen={isModalActive} 
        onClose={handleModalClose}
        title="访问受限"
      >
        <PasswordProtection onSuccess={handlePasswordSuccess} />
      </Modal>
    </ProjectLayout>
  );
}

export default ProjectPage; 