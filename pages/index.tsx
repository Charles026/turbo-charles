import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../components/Avatar';
import ScrollIndicator from '../components/ScrollIndicator';
import styles from '../styles/Home.module.css';
import ProjectCardList from '@/components/ProjectCardList';
import projects from '@/data/projects';
import HomeFooter from '@/components/HomeFooter';






export default function Home() {
  

  return (
    <div>
    
      <ScrollIndicator/>


      <main className='container px-5 flex flex-col  mx-auto pt-16  xl:flex-row '>
        
        <div className='mx-auto  w-auto mb-20 xl:w-1/2 xl:mr-8'>
          <div className='text-center top-16 xl:mr-8 xl:sticky xl:text-left xl:ml-0 relative'>

          <div className={styles.blurCircleGreen}></div>
          <div className={styles.blurCircleBlue}></div>

            <div className='flex flex-row justify-center xl:justify-start'>
            <Avatar src="/myphoto@2x.png" alt="User Avatar" size={140} />
            </div>
            <div className='mt-8 '>
              <h1 className="text-5xl font-black ">
                Charles
              </h1>
              <div className='text-lg gap-3  leading-loose  flex flex-col mt-4 '>
                <p>
                  UI/UX Designer
                </p>
                <p>
                  Currently @ Kingsoft Office MUI Team.<br/>Designing KingSoft Office Design Systems.
                </p>
                <p>
                  🧑🏻‍💻 I design and code.<br/>
                  🐱 Living with 4 lovely cats.
                </p>
              </div>
            </div>
          
          </div>
        </div>
       
        <div className='mx-auto  mb-40'>
          <h1 className='text-xl mb-6 text-gray-900 font-semibold  text-center xl:text-left  dark:text-gray-50'>Projects</h1>
          <ProjectCardList data={ projects}></ProjectCardList>
        </div>

    </main>
    <HomeFooter />
    </div>
  )
}
