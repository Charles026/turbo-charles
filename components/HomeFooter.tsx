
import Image from "next/image";
// import CatHead from '..public/cat-head.svg';
import styles from '@/components/HomeFooter.module.css';

const HomeFooter = () => {
    return (
        <footer className={`${styles.footerWrapper} flex flex-row items-center justify-center`}>

            <div className="container flex flex-row">

            <Image src='./cat-head.svg' width={48} height={48} alt="Ahdai">
            </Image>

            <div className={styles.contentWrapper}>
            <p>
                Built with ❤️ for Ahdai
            </p>
            <p className="text-xs text-gray-500">
                © 2023 Charles
            </p>
            </div>

            </div>
    </footer>  
    )
}

export default HomeFooter;