
import Image from "next/image";
import CatHead from '@/public/cat-head.svg';
import styles from '@/components/HomeFooter.module.css';

const HomeFooter = () => {
    const year = new Date().getFullYear();
    return (

        <footer className={`${styles.footerWrapper} flex flex-row items-center justify-center `}>
        <div className="flex flex-row justify-between container px-5">
        <div className="flex flex-row gap-4 justify-center items-center ">
        <Image className="w-8 h-auto" src={CatHead} alt="Ahdai"/>
        <p>
            Built with ❤️ for Ahdai
        </p>
        </div>
      
        <p className={styles.copywrite}>{` © ${year} Charles `}</p>
        </div>
        </footer>

    )
}

export default HomeFooter;


// <footer className={`${styles.footerWrapper} flex flex-row items-center justify-center `}>

// <div className="container flex flex-row px-5 justify-center xl:justify-start">
// <div className="flex xl:flex-row justify-center items-center flex-col">

// <div className='flex flex-col ml-3 justify-center items-center xl:items-start'>
// <p>
//     Built with ❤️ for Ahdai
// </p>
// </div>
// </div>
// <p className="text-xs text-gray-500">
//     © 2023 Charles
// </p>
// </div>
// </footer> 