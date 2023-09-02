import React from 'react'
import { styles } from '../style'
import { projects } from '../contants'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

const Works = () => {
  return (
    <>
      <section id="projects" ></section>
      <section className='w-[80%] mx-auto mt-24' >
      <motion.div variants={ textVariant() }>
        <h1 className='px-4 py-2 text-white-200 text-xl font-normal lg:text-left text-center'>My Work</h1>
        <h1 className={`${styles.sectionHeadText} text-white lg:text-left text-center`}>Projects</h1>
      </motion.div>
      <motion.p variants={ fadeIn("", "", "0.2", "1") } className='mt-3 text-secondary text-[17px] max-full leading-[30px] lg:w-[70%] w-full ' >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </motion.p>
      <div className='w-full lg:flex gap-10 mt-16'>
        {
          projects.map( project => 
            
            <div key={project.name} className='lg:w-[50%] w-full h-fit bg-black mt-2'>
              <div className='w-full h-fit bg-tertiary p-5 rounded-xl'>
                <img className='w-full h-[300px] lg:object-cover object-contain' src={project.image} alt='Project Photo' />
                <div className='w-full h-fit mt-2'> 
                  <h1 className='text-xl text-white font-bold px-3 py-2'>{project.name}</h1>
                  <p className={`text-sm text-white px-3 py-2`}>{project.description}</p>
                  <div className='px-3 py-4'>
                    <h1 className='text-md text-white px-3 py-2 font-bold'>For Easy Login use:</h1>
                    <h1 className='text-md text-white px-3 py-2'><b>Email:</b> {project.userCredentials.email}</h1>
                    <h1 className='text-md text-white px-3 py-2'><b>Passwor: </b>{project.userCredentials.password}</h1>
                  </div>  
                  
                  <div className='mt-2 flex flex-row flex-wrap gap-4 justify-center'>
                    {
                      project.tags.map( tag => 
                        <div key={tag.name} className={`${tag.color} w-auto h-[40px] rounded-xl `}>
                           <h1 className='text-black text-sm font-bold px-3 py-3'>{tag.name}</h1> 
                        </div>
                      )
                    }
                  </div>
                </div>
                <div className='w-full flex justify-center gap-10 mt-6'>
                  <button className='border-4 border-white rounded-full hover:scale-125 px-2 py-2' onClick={() => { window.open(project.source_code_link, "_blank") }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </button>  
                  <button className='border-4 border-white rounded-full hover:scale-125 px-2 py-2' onClick={() => { window.open(project.liveSite, "_blank") }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                    </svg>
                  </button> 
                </div>  
              </div>
            </div>

          )
        }
      </div>
    </section>
    </>
   
  )
}

export default Works