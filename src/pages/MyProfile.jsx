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
    <div>
      
        <img src={userDate.image} alt="" />

        {
          isEdit ? <input value={userDate.name} type="text" onChange={(e) =>setUserData(prev => ({...prev, name: e.target.value}))} /> 
          : <p>{userDate.name}</p>
        }

        <hr />
        <div>
          <p>
            CONTACT INFORMATION
          </p>
          <div>
            <p>Email id:</p>
            <p>{userDate.email}</p>
            <p>Phone:</p>
            {
              isEdit ? <input type="text" value={userDate.phone} onChange={(e) => setUserData(prev => ({...prev, phone: e.target.value}))} /> : <p>{userDate.phone}</p>
            }
            <p>Address</p>
            {
              isEdit ? <p>
                <input type="text" onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line1: e.target.value}}))} value={userDate.address.line1}/>
                <br />
                <input type="text" onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line2: e.target.value}}))} value={userDate.address.line2}/>
              </p>
               : <p>
                {userDate.address.line1}
                <br />
                {userDate.address.line2}
              </p>
            }
          </div>
        </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
            isEdit ? <select value={userDate.gender} onChange={(e) =>setUserData(prev => ({...prev, gender: e.target.value}))}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> : <p>{userDate.gender}</p>
          }
          <p>Birthday</p>
          {
            isEdit ? <input type='date' onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))}/>
            : <p>{userDate.dob}</p>
          }
        </div>
      </div>
      <idv>
        {
          isEdit
          ? <button onClick={() => setIsEdit(false)}>Save information</button>
          : <button onClick={() => setIsEdit(true)}>Edit</button>
        }
      </idv>
    </div>
  )
}

export default MyProfile