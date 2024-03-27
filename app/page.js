import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <div className='bg-slate-200 h-screen w-screen flex flex-col items-center justify-center'>
      <span className='font-bold text-gray-950 text-6xl'>LapMate</span>
      <span className='text-2xl text-gray-400'>pre loved notebooks</span>
      <div className='flex border justify-between items-center h-8 p-6 gap-5  mt-5 w-80'>
        <button className='w-60 border border-gray-950  hover:bg-gray-950 hover:text-slate-300 duration-300 rounded-sm cursor-not-allowed'>Register</button>
        <button className='w-60 border border-gray-950  hover:bg-gray-950 hover:text-slate-300 duration-300 rounded-sm cursor-not-allowed'>Login</button>
      </div>
      <div className='mt-5 text-gray-500 cursor-pointer'>
       <Link href='/home'> Continue With Demo Account </Link>
      </div>
    </div>
    
  )
}

export default page