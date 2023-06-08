import styles from './Nav.module.css'
import { useRouter } from 'next/router'

const Nav = () => {

    // 实现一个返回跳转
    const router = useRouter()
    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        router.push('/')
    }


    return (
        <nav className={`${styles.navContainer} w-full  h-16 flex justify-center items-center`}>
            <div className='container fixed'>
                <button onClick={handleClick} className={styles.title}>Projects</button>
            </div>
        </nav>

    )
}

export default Nav;