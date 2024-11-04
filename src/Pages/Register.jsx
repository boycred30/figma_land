import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className=' flex items-center justify-center min-h-screen'>
      <div className=' shadow-lg p-8 max-w-md w-full'>
        <h2 text-2xl font-bold text-gray-1000>Register</h2>
        <form>
          <div className='mb-4'>
          <label className='block text-gray-1000 font-semibold mb-2'>Username</label>
          <input type='text' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'placeholder='Enter your name'required/>
          </div>
          <div className='mb-4'>
          <label className='block text-gray-1000 font-semibold mb-2'>Email</label>
          <input type='text' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'placeholder='Enter your email'required/>
          </div>
          <div className='mb-4'>
          <label className='block text-gray-1000 font-semibold mb-2'>Password</label>
          <input type='text' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'placeholder='Enter your password'required/>
          </div>
        </form>

        <p className='text-center text-gray-600 mt-4'> already have an account? <Link to={'/login'}
         className='text-blue-500 hover:underline'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
