import React, { useRef } from 'react'
import { styles } from '../style'
import me from '../assets/me.png'
const About = () => {


  return (
    <>
    <section id="about" ></section>
      <section className='w-[80%] mx-auto mt-36' >
        <div className='px-3 py-4  w-full'>
          <h1 className={`${styles.sectionHeadText} text-white font-semibold text-center`}>Get To Know More About Me </h1>
          <div className='lg:flex gap-6 mt-10'>
            <div className='lg:w-[40%] lg:h-[250px] h-[200px] w-full flex justify-center items-center'>
              <div className='lg:w-[50%] w-[70%] h-full rounded-full border-2 border-white'>
                <img className='w-full h-full p-2 object-cover rounded-full' src={me} alt='My Photo' />
              </div>
            </div>
            <div className='px-2 py-2 lg:w-[60%] w-full mt-4'>
              <h1 className='text-white text-2xl font-bold'>Hello !</h1>
              <p className={`${styles.sectionSubText} text-white-100 py-4`}>
              My name is Pratham Panthari, and I am a passionate full-stack web developer. I enjoy harnessing web technologies to create user-friendly web applications that address various niche and business-specific challenges.
              I would be delighted to hear from you, whether it's regarding a project, a job opportunity, or just for a friendly chat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
