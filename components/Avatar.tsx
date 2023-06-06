import Image from 'next/image';
import styles from './Avatar.module.css';

type AvatarProps = {
  src: string;
  alt: string;
  size: number;
};

const Avatar = ({ src, alt, size }: AvatarProps) => {
  const height = size;
  const width = size;

  return (
    <div className={styles.avatar} style={{ width, height }}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Avatar;
