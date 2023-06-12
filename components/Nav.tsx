import styles from './Nav.module.css'
import { useRouter } from 'next/router'
import ScrollIndicator from './ScrollIndicator'
import Link from 'next/link'
import ArrowLeft from './icons/ArrowLeft'

const Nav = () => {

    // 实现一个返回跳转
    const router = useRouter()
    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        router.push('/')
    }


    return (
        <nav className={` flex justify-center h-16 items-center `}>
            <ScrollIndicator />
            
            <div className={`container fixed ${styles.navContainer} xs:px-4` }>
                
                <div className={`${styles.backButtonContainer} `}>
                <Link href={"/"} className='flex flex-row gap-3 items-center w-fit' >
                <ArrowLeft/>
                Projects 
                </Link>
                </div>
                
             
            </div>

        </nav>

    )
}

export default Nav;