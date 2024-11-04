import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='bg-black flex items-center justify-center min-h-screen'>
      <div className='bg-black shadow-lg rounded-lg p-8 max-w-md w-full'>
        <h2 className='text-2xl font-bold text-gray-100 text-center md-6'>Log In</h2>
        <from>
          <div className='mb-4'>
            <label className='block text-gray-1000 font-semibold mb-2'>Email</label>
            <input
            type='email'
            className='w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
            placeholder='Enter your email'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-1000 font-semibold mb-2'>Password</label>
            <input
            type='password'
               className='w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                placeholder='Enter your password'
            />
          </div>
          <button
          type='submit'
          className='w-full px-4  bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300'>Login</button>
        </from>
        <p className='text-center text-gray-600 mt-4'> Don't have an account? <Link to={'/register'}
         className='text-blue-500 hover:underline'>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
