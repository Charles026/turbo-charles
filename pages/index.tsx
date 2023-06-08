
import Link from 'next/link'
import Avatar from '../components/Avatar';
import ScrollIndicator from '../components/ScrollIndicator';
import styles from '../styles/Home.module.css';
import ProjectCardList from '@/components/ProjectCardList';
import projects from '@/data/projects';
import Dribbble from '@/components/icons/Dribbble';
import Instagram from '@/components/icons/Instagram';
import Github from '@/components/icons/Github';
import Weixin from '@/components/icons/Weixin';





export default function Home() {

  

  return (
    <>
      <ScrollIndicator/>

      <div className='container px-5 flex flex-col  mx-auto lg:pt-16   xl:flex-row '>
        
        <div className='mx-auto  w-auto mb-20 xl:w-1/2 xl:mr-8'>
          <div className='text-center top-16 xl:mr-8 xl:sticky xl:text-left xl:ml-0 relative'>

          <div className={styles.blurCircleGreen}></div>
          <div className={styles.blurCircleBlue}></div>

            <div className='flex flex-row justify-center xl:justify-start'>
            <Avatar src="/myphoto@2x.png" alt="User Avatar" size={140} />
            </div>
            <div className='mt-8 '>
              <h1 className="text-5xl font-extrabold" style={{color: "var(--tc-color-text-primary)"}}>
                Charles
              </h1>
              <div className='text-lg gap-4  leading-loose  flex flex-col mt-4 '>
                <p>
                  UI/UX Designer
                </p>
                <p>
                  Currently @ Kingsoft Office MUI Team.<br/>Designing KingSoft Office Design Systems & WPS AI
                </p>
                <p>
                  🧑🏻‍💻 I design and code.<br/>
                  🐱 Living with 4 lovely cats.
                </p>
              </div>
              <div className={`${styles.iconWrapper} flex flex-row gap-5 justify-center xl:justify-start mt-4`}>
                <Link href="https://dribbble.com/mumumycat">
                <Dribbble />
                </Link>
                <Link href="https://www.instagram.com/bancs_pine">
                <Instagram />
                </Link>
                <Link href="https://github.com/Charles026">
                <Github />
                </Link>
                <Link href="/">
                <Weixin />
                </Link>
                </div>
            </div>
          
          </div>
        </div>
       
        <div className='container mx-auto mt-10 mb-40 xl:w-1/2 xl:mt-0'>
          <h1 className='text-xl mb-6 font-semibold  text-center xl:text-left' style={{color:"var(--tc-color-text-primary)"}}>Projects</h1>
          <ProjectCardList data={ projects}></ProjectCardList>
        </div>

    </div>

    </>
  )
}
