import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout;