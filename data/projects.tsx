import imgPlaceholder from "../images/img-placeholder.webp";
import imgPrototypes from "../images/prototypePlaceholder.webp";
import imgLingxi from "../images/lingxiPlaceholder.webp";
import imgWpsAi from "../images/WPSAICover.webp";

const projects = [
  {
    projectName: 'copilot',
    coverImage: imgWpsAi,
    projectTitle: 'WPS Copilot',
    subtitle: '为下一代 WPS 设计 LUI + Canvas 交互范式',
    tags: ['AI', 'UX Design', 'Product Design','2023-2025'],
  },

  {
    projectName: 'lingxi',
    coverImage: imgLingxi,
    projectTitle: 'WPS Lingxi Design Upgrade',
    subtitle: 'WPS 灵犀主站设计升级',
    tags: ['AI', 'UX Design', 'Product Design','2024-2025'],
  },

  {
    projectName: 'kingsoft-office-design-system',
    coverImage: imgPlaceholder,
    projectTitle: 'Kingsoft Office Design Systems',
    subtitle: '金山办公设计系统',
    tags: ['Design System', 'Design Engineering','2022-2023'],
  },

  {
    projectName: 'prototyping',
    coverImage: imgPrototypes,
    projectTitle: 'Prototyping in WPS',
    subtitle: '一些在 WPS 的 Prototype 制作',
    tags: ['Prototyping', 'Protopie', 'p5.js','2022-2025'],
  },
]

export default projects;