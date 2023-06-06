import styles from "./Tag.module.css";
interface TagProps {
  label: string;
  key: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <span key={label} className={styles.tagWrapper}>
      {label}
    </span>
  );
};

export default Tag;
