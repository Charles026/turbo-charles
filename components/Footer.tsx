
import styles from '@/components/Footer.module.css';
import ColorModeSwitch from "./ColorModeSwitch";
import CatHead from '@/components/icons/CatHead';

const Footer = () => {
    const year = new Date().getFullYear();
    return (

        <footer className={`${styles.footerWrapper} flex flex-row items-center justify-center `}>
        <div className="flex flex-row justify-between container px-5">
        <div className="flex flex-row gap-4 justify-center items-center">
        <CatHead/>
        <p className="text-sm">
            Built with Next.js & ❤️ for Ahdai
        </p>
        <p className="text-sm">{` © ${year} Charles `}</p>
        </div>
      
       <div className="m-0 p-0 hidden md:flex flex-col justify-center items-center">
        <ColorModeSwitch/>
        </div>
        </div>
       
        </footer>

    )
}

export default Footer;


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