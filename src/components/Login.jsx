import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {

  const [isSignIn,setIsSignIn] =useState(true);

  const toggleSignIn = ()=>{
      setIsSignIn(!isSignIn);
  };
  return (
    <div>
    <Header />
    <div  className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/US-en-20241216-TRIFECTA-perspective_16158377-32b2-42cc-ba71-15929be7d1f2_medium.jpg" alt='backgroundImage'/>
    </div>
    <form className='relative p-12 bg-black  w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
      <h1 className='font-bold text-3xl'> 
      {isSignIn?"Sign In":"Sign Up"}
      </h1>
      {!isSignIn && (<input type="text" placeholder='Full Name' className="p-2 my-4 w-full rounded-md bg-gray-700"/>)}
      <input type="text" placeholder='Email Address' className="p-2 my-4 w-full rounded-md bg-gray-700"/>
      <input type='password' placeholder='Password' className="p-2 my-4 rounded-md w-full bg-gray-700"/>
      <button className='p-4 my-6 rounded-md bg-red-800 w-full'>{isSignIn?"Sign In":"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignIn}> {isSignIn?"New to Netflix? SignUp Now": "Already Member? SignIn Now"}</p>
    </form>
    </div>
    
  )
}

export default Login