import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <SignUp signInUrl='/login'/>
    </div>
  )
}

export default RegisterPage