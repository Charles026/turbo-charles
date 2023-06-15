import { useState, useEffect } from 'react';
import styles from './NavBlur.module.css'
import { useTheme } from 'next-themes'

const NavBlur = () => { 
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme()

    // 当theme =light时，去除NavBlurWrapper
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (theme === 'light') {
        return null
    }

    return (
        <div className={` ${styles.NavBlurWrapper} h-16 w-full select-none pointer-events-none`}></div>
    )
}

export default NavBlur;
