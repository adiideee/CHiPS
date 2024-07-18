import React from 'react'
import Login from './Login'


export default function LoginPage() {
  return (
    <>
      <div className="flex h-screen">
      <div className="w-1/3 bg-white">
        <p className='text-gray-400 text-2xl pl-8 pt-14 font-bold font-nunito'> Log In </p>
        <div className='h-20 w-11/12'>
        <Login/>
        </div>
      </div>
      <div className="w-2/3 bg-green-200 bg-image">
        {/* insert image */}
      </div>
    </div>
    </>
  )
}