import Tag from './Tag';
import styles from './Card.module.css';
import React from 'react';
import Link from 'next/link'

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  key: string;
  href: string;
}

const Card = ({ image, title, subtitle, tags , href }: CardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='bg-white flex flex-col border border-gray-200 rounded-xl p-6 w-fit overflow-hidden shadow-sm transition-shadow dark:bg-zinc-800 dark:border-zinc-800 hover:dark:bg-zinc-700 hover:shadow-lg' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={href}>
      <div className={styles.card__image_container}>
        <img src={image} alt={title} className={styles.card__image} />
        {isHovered && (
          <div className={styles.card__image_hover}>
            <img src={image} alt={title} className={styles.card__image_hover__img} />
          </div>
        )}
      </div>
      <div className=' text-gray-900 flex flex-col space-y-0  mt-6 mb-4  dark:text-white'>
        <h2 className=' text-lg font-bold mb-1'>{title}</h2>
        <p className='text-lg font-medium'>{subtitle}</p>
      </div>
      <div className={styles.card__tags}>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      </Link>
    </div>
  );
};

export default Card;
