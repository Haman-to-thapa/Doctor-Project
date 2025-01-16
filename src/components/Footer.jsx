import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
   <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      {/*    Left Side    */}
      <div>
      <img src={assets.logo} className='mb-5 w-40' />
      <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, exercitationem placeat? Sed laudantium nobis omnis delectus dolorem facilis ipsum aperiam provident nihil accusamus! Officiis fuga corrupti minima temporibus, dicta exercitationem.</p>
      </div>
      {/*     Center Section    */}
      <div className=''>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
  <ul className='flex flex-col gap-2 text-gray-600'>
    <li>Home</li>
    <li>About us</li>
    <li>Contact us</li>
    <li>Privacy policy</li>
  </ul>
      </div>
        {/*    Right Section   */}
      <div>
        <p className='text-xl font-medium bg-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600 pt-5'>
           <li>+1-212-456-7890</li>
           <li>greatstackdev@gamil.com</li>
           </ul>
      </div>
    </div>
    {/* ---------- CopyRight Text ------ */}
      <div>
    <hr />
    <p className='py-5 text-sm text-center'>CopyRight 2025@ Prescripto - All Right Reserved.</p>
      </div>
   </div>
  )
}

export default Footer