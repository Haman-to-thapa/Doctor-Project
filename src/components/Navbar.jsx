import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()
  const [token, setToken] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='flex items-center justify-between text:sm py-4 border-b border-gray-600'>
      <img src={assets.logo} className="w-44 cursor-pointer" onClick={() => navigate('/')} />
      <ul className='hidden md:flex items-start gap-5  font-medium'>
        <NavLink to={"/"}>
          <li className='py-1'>HOME</li>
          <hr  className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
        </NavLink>

        <NavLink to={"/doctors"}>
          <li className='py-1'>ALL DOCTORS</li>
          <hr  className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
        </NavLink>
      <NavLink to={"/about"}>
        <li className='py-1'>
          ABOUT
        </li>
        <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
      </NavLink>

      <NavLink to={'/contact'}>
        <li className='py-1'>
          CONTACT
        </li>
        <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
      </NavLink>

      </ul>
      <div className='flex items-center gap-4'>
          {
            token ?
             <div className='flex items-center gap-2 cursor-pointer group relative'>
               <img src={assets.profile_pic} className="w-8 rounded-full" /> 
            <img src={assets.dropdown_icon} className="w-2.5" />
            <div className='absolute  top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 border flex flex-col gap-4 p-4'>
                <p onClick={() => navigate("/my-profile") } className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() =>navigate("my-appointments") } 
                className='hover:text-black cursor-pointer'> My Appoint</p>
                <p onClick={() => setToken(false)} 
                className='hover:text-black cursor-pointer'>Logout</p>
                </div>

              </div>

            </div>
            
            :

            <button onClick={() => navigate("/login")}
            className='bg-primary text-white rounded-full px-8 py-3 font-ligh hidden md:block'
            >Create account</button>
          }
         
          </div>   
    </div>
  )
}

export default Navbar;