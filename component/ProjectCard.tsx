import Link from "next/link";
import  Image from "next/image";
import styles from "@/component/ProjectCard.module.css";

import type { StaticImageData } from 'next/image';

const ProjectCard = ({ projectName, coverImage }: { projectName: string, coverImage: StaticImageData }) => {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
            <Link  href={`/projects/${projectName}`}>
                <Image 
                src={coverImage}
                alt={`${projectName} Cover`}
                width={540}
                height={360}
                />
            </Link>
            </div>
        </div>
        
    )

}

export default ProjectCard;