import ProjectLayout from "@/components/projectLayout"
import Image from "next/image";
import Placeholder from "@/images/img-placeholder.jpg"
import ImageTest from "@/images/Image.png"

function ProjectPage() {
  return (
    <div style={{height:"3000px"}}>

      <Image src={ImageTest} alt="placeholder"  />
      <div className="container grid grid-flow-row gap-4 justify-center">

      
      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage;
