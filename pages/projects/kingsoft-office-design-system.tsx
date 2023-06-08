import ProjectLayout from "@/components/projectLayout"
import Image from "next/image";
import Placeholder from "@/images/img-placeholder.jpg"

function ProjectPage() {
  return (
    <div style={{height:"3000px"}}>
      <h1 className="text-4xl font-bold text-center " style={{color:"var(--color-text-primary)"}}>
        Hello project
      </h1>
      <Image src={Placeholder} alt="placeholder" width={1000} />
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProjectLayout>{page}</ProjectLayout>;
}

export default ProjectPage;
