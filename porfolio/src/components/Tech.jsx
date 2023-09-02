import React from 'react'
import { BallCanvas } from './canvas' 
import { technologies } from '../contants'
import { styles } from '../style'
const Tech = () => {
  return (
   <>
      <section className='lg:w-[70%] w-full mt-16 mx-auto'>
        <h1 className='px-4 py-5 text-center text-white text-3xl font-bold'>Skills</h1>
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-6 px-3 py-4 self-center w-[60%] mx-auto'>
        {
          technologies.map((tech) => 

            <div className='w-28 h-28' key={tech.name}>
              <BallCanvas icon={tech.icon} />
              <h1 className={`${styles.sectionSubText} text-center text-white-100`}>{tech.name}</h1>
            </div>

          )
        }
        </div>
      </section>
   </>
  )
}

export default Tech