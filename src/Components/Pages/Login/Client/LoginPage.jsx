import React from 'react';
import Login from './Login';

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-white flex flex-col justify-center items-center">
        <b className='text-black text-2xl mb-4'>Welcome to CH𝓲PS GIS!</b>
        <p className='text-gray-400 text-2xl font-bold mb-8'>Log In</p>
        <div className='w-10/12'>
          <Login />
        </div>
      </div>
      <div className="w-2/3 bg-green-200 flex justify-center items-center bg-cover" style={{ backgroundImage: `url('path/to/your/image.jpg')` }}>
        {/* Alternatively, you can use an img tag if you prefer */}
        {/* <img src="path/to/your/image.jpg" alt="Background" className="object-cover h-full w-full" /> */}
      </div>
    </div>
  );
}

