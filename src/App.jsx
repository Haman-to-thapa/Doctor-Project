
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppintment from './pages/MyAppintment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'

function App() {


  return (
   <div className='mx-4 sm:mx-[10%]'>

      <Navbar/>


    <Routes>

    <Route path='/' element={<Home/>}/>

    <Route path='/doctors' element={<Doctor/>}/>

    <Route path='/doctors/:specilality' element={<Doctor/>}/>

    <Route path='/login' element={<Login/>}/>

    <Route path='/contact' element={<Contact/>}/>

    <Route path='/my-profile' element={MyProfile}/>

    <Route path='my-appointments' element={<MyAppintment/>}/>
    <Route path='/about' element={<About/>}/>

    <Route path='/appointments/:docId' element={<Appointment/>}/>

    </Routes>
    <Footer/>
   </div>
  )
}

export default App
