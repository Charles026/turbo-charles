import styles from './NavBlur.module.css'

const NavBlur = () => { 
    return (
        <div className={` ${styles.NavBlurWrapper} h-16 w-full select-none pointer-events-none`}></div>
    )
}

export default NavBlur;