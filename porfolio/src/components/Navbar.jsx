import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../contants'
import { logo, menu, close } from '../assets'
import { styles } from '../style'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className={`${styles.paddingX} w-full flex items-center py-5 z-20 fixed top-0 bg-primary`}>
        <div className='w-full flex justify-between max-w-7xl mx-auto items-center'>
          <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0) }} >
            <img className='w-auto h-9 object-contain' src={logo} alt='My Logo' />
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {
              navLinks.map((link) => 
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary" } hover:text-white text-[18px] font-medium cursor-pointer `} onClick={() => {setActive(link.title)}} >
                  <HashLink smooth to={`/#${link.id}`}>{link.title}</HashLink>
                </li>
              )
            }
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center ' >
            <img src={toggle ? close : menu } alt='menu' className='w-[20px] h-[20px] object-contain items-center' onClick={() => {setToggle((prevState) => !prevState)}} />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient mx-4 py-2 top-28 right-0 z-10 absolute min-w-[140px] rounded-xl`}>
              <ul className='list-none flex flex-col justify-end items-start gap-10'>
                {
                  navLinks.map((link) => 
                    <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary" } hover:text-white text-[18px] font-medium cursor-pointer `} onClick={() => {setToggle((prevState) => !prevState) ;setActive(link.title)}} >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar