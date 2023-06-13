'use client'
import styles from './NavBlur.module.css'
import { useTheme } from 'next-themes'

const NavBlur = () => { 

    // 当theme =light时，去除NavBlurWrapper
    const { theme } = useTheme()
    if (theme === 'light') {
        return null
    }

    return (
        <div className={` ${styles.NavBlurWrapper} h-16 w-full select-none pointer-events-none`}></div>
    )
}

export default NavBlur;