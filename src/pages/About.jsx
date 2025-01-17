import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center pt-10 text-2xl text-gray-500'>
     <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
    </div>

    <div>
   
    <div className='my-10 flex flex-col md:flex-row gap-12'>
    <img src={assets.about_image} className="w-full md:max-w-[360px]" />
    <div className='gap-6 text-gray-600 flex flex-col justify-center md:w-2/4 text-sm'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas recusandae saepe soluta, libero laborum non placeat, quod animi repellendus assumenda. Molestiae tenetur molestias dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi minus illum. Quae quis commodi accusamus quas. Voluptatibus, praesentium qui?</p>
      <b className='text-gray-800'>Our Vision</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit saepe consequatur beatae molestiae et est eveniet distinctio dolorum sint!

      </p>
    </div>
    </div>
    </div>
    <div>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
    </div>


    <div className='flex flex-col md:flex-row mb-20 mt-5'>

    <div className='border px-10 md:px-16 flex flex-col text-[15px] gap-5 hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer py-8'>

      <b>Efficiency:</b>
      <p>Steamlined appintment schedualing that fits into your busy lifestyle.</p>
    
    </div>
    <div className='border px-10 md:px-16 flex flex-col text-[15px] gap-5 hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer py-8'>

    <b>Converience:</b>
    <p> Access to a network of tursted healthcare professionals in your aea.</p>
    
    </div>
    <div className='border px-10 md:px-16 flex flex-col text-[15px] gap-5 hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer py-8'>

    <b>Personalization:</b>
    <p>Tailord recommendations and reminders to help you stay ontop of your health.</p>

    </div>
    </div>

    </div>
  )
}

export default About