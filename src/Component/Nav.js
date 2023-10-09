import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
const Nav = () => {
  const [Nav,setNav]=useState(false);
    const Links =[
       {
        id:1,
        link: 'home',
       },
       {
        id:2,
        link: 'about',
       },
       {
        id:3,
        link: 'portfolio',
       },
       {
        id:4,
        link: 'expirence',
       },
       {
        id:5,
        link: 'contact',
       },
    ]
  return (
    <div className=' flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className=' text-5xl font-signature ml-2'>Akash Dubey</h1>
        </div>
        <ul className='hidden md:flex'>
            { Links.map(({id,link})=>{
              return(
                <li key={id} className=' px-4 cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200'>{link}</li>
              )
            })}
        </ul>
        {/* Mobile responsiveness */}
        <div className=' cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={()=>setNav(!Nav)}>
            {Nav ? <FaTimes size={30}/>:<FaBars size={30}/>}
        </div>
        {Nav && (
          <ul className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden'>
        { Links.map(({id,link})=>{
              return(
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
              )
            })}
        </ul>
        )}
    </div>
  )
}

export default Nav
