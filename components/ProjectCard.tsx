import Link from "next/link";
import  Image from "next/image";
import styles from "@/components/ProjectCard.module.css";
import Tag from "./Tag";

import type { StaticImageData } from 'next/image';

interface Props {
    projectName: string;
    coverImage: StaticImageData;
    projectTitle: string;
    subtitle: string;
    tags: string[];
    key: string;
  }

const ProjectCard = ({ projectName,projectTitle,coverImage,tags,subtitle }: Props) => {

    return (
        <div className='md:w-full'>
            <div className={`${styles.imageContainer}`}>
            <Link  href={`/projects/${projectName}`}>
                <Image  className="w-full h-full object-cover"
                src={coverImage}
                alt={`${projectName} Cover`}
                />
            </Link>
            </div>
            <div className={styles.titleContainer}>
            <Link href={`/projects/${projectName}`}>
                <h3 className={styles.title}>{projectTitle}</h3>
            </Link>
            <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.tagsWrapper}>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
        </div>
        
    )

}

export default ProjectCard;