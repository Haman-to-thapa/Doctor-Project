import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const MyProfile = () => {
    const [userDate, setUserData] = useState({
    name: "Edward Vincent", 
    image: assets.profile_pic,
    email:'richardjamswap@gamil.com',
    phone:"+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle , Church Road, London",
    },
    gender:"Male",
    dob:'2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false)


  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      
        <img src={userDate.image} className="w-36 rounded" />

        {
          isEdit ?
           <input value={userDate.name} type="text" onChange={(e) =>setUserData(prev => ({...prev, name: e.target.value}))} className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' /> 
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userDate.name}</p>
        }

        <hr className='bg-zinc-400 h-[1px] border-none'/>
        <div>
          <p className='text-neutral-500 underline mt-3'>
            CONTACT INFORMATION
          </p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email id:</p>
            <p className='text-blue-500'>{userDate.email}</p>
            <p className='font-medium'>Phone:</p>
            {
              isEdit ? <input className='bg-gray-100 max-w-52' type="text" value={userDate.phone} onChange={(e) => setUserData(prev => ({...prev, phone: e.target.value}))} /> : <p className='text-blue-400'>{userDate.phone}</p>
            }
            <p className='font-medium' >Address</p>
            {
              isEdit ? <p>
                <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line1: e.target.value}}))} value={userDate.address.line1}/>
                <br />
                <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line2: e.target.value}}))} value={userDate.address.line2}/>
              </p>
               : <p className='text-gray-500'>
                {userDate.address.line1}
                <br />
                {userDate.address.line2}
              </p>
            }
          </div>
        </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit ? <select className='max-w-20 bg-gray-100' value={userDate.gender} onChange={(e) =>setUserData(prev => ({...prev, gender: e.target.value}))}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> : <p className='text-gray-400'>{userDate.gender}</p>
          }
          <p className='font-medium'>Birthday</p>
          {
            isEdit ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))}/>
            : <p className='text-gray-400'>{userDate.dob}</p>
          }
        </div>
      </div>
      <div  className='mt-10'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:text-white hover:bg-primary transition-all' onClick={() => setIsEdit(false)}>Save information</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile