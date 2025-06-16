import React from 'react'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='max-w-7xl mx-auto  mt-4 p-4 '>
    
       <NavBar></NavBar>
       <div className=' text-white rounded-b-3xl'><Outlet></Outlet></div>
       <Footer></Footer>
    </div>
  )
}

export default Root