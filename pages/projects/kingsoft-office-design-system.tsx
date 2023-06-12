import ProjectLayout from "@/components/projectLayout"
import Image from "next/image";
import Placeholder from "@/images/img-placeholder.jpg"
import ImageTest from "@/images/Image.png"

function ProjectPage() {
  return (
    <div style={{height:"3000px"}}>
      <h1 className="text-4xl font-bold text-center " style={{color:"var(--tc-color-text-primary)"}}>
        Hello project
      </h1>
      <div className="container grid grid-flow-row gap-4">
      <Image src={Placeholder} alt="placeholder" width={1000} />
      <Image src={ImageTest} alt="placeholder" width={1000} />
      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage;
