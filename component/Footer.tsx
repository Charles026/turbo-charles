
import Image from "next/image";
import CatHead from '@/images/cat-head.svg';
import styles from '@/component/Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footerWrapper} flex flex-row items-center justify-center`}>

            <div className="container flex flex-row">

            <Image src={CatHead} alt="Ahdai">
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

export default Footer;