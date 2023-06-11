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
        <nav className={` w-full  h-16 flex justify-center items-center`}>
            <ScrollIndicator />
            <div className={`container fixed ${styles.navContainer}` }>
                
                <Link href={"/"} className={styles.backButtonContainer}>
                <div className='flex flex-row gap-3 items-center w-fit' >
                <ArrowLeft/>
                Projects 
                </div>
                </Link>
             
            </div>
        </nav>

    )
}

export default Nav;