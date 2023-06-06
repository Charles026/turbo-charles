import Link from "next/link";
import  Image from "next/image";
import styles from "@/components/ProjectCard.module.css";
import Tag from "./Tag";

import type { StaticImageData } from 'next/image';

interface Props {
    projectName: string;
    coverImage: StaticImageData;
    title: string;
    subtitle: string;
    tags: string[];
    key: string;
  }

const ProjectCard = ({ projectName, coverImage,tags }: Props) => {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
            <Link  href={`/projects/${projectName}`}>
                <Image 
                src={coverImage}
                alt={`${projectName} Cover`}
                width={600}
                height={360}
                />
            </Link>
            </div>
            <div className={styles.card__tags}>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
        </div>
        
    )

}

export default ProjectCard;