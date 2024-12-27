import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react';
import validate from '../utils/validate';
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";

import { addUser } from '../utils/userSlice';
import { netflix_bg,useravatar } from '../utils/constants';


const Login = () => {

  const [isSignIn,setIsSignIn] =useState(true);
  const [errorMessage,setErrorMessage] =useState("");
  const email =useRef(null)
  const password = useRef(null)
  const name =useRef(null)
  const dispatch =useDispatch();

  const handleButtonClick =()=>{
    
    //validate form data
    const msg = validate(email.current.value,password.current.value);
    setErrorMessage(msg);
    if (msg) return;
    //sign In or sign up
      if(!isSignIn){
        //Sign Up logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName: name.current.value, photoURL:useravatar
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));

          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(errorMessage);
          });
          
          })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+'-'+errorMessage);
          // ..
        });
      }
      else{
        //Sign In logic
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
          });

      }
  };

  const toggleSignIn = ()=>{
      setIsSignIn(!isSignIn);
  };
  return (
    <div>
    <Header />
    <div  className='absolute'>
      <img src={netflix_bg} alt='backgroundImage' className='relative'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='relative p-12 bg-black  w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
      <h1 className='font-bold text-3xl'> 
      {isSignIn?"Sign In":"Sign Up"}
      </h1>
      {!isSignIn && (<input type="text" placeholder='Full Name' className="p-2 my-4 w-full rounded-md bg-gray-700" ref={name}/>)}
      <input type="text" placeholder='Email Address' className="p-2 my-4 w-full rounded-md bg-gray-700" ref={email}/>

      <input type='password' placeholder='Password' className="p-2 my-4 rounded-md w-full bg-gray-700" ref={password}/>
      
      <p className='text-lg text-red-400'>{errorMessage}</p>

      <button className='p-4 my-6 rounded-md bg-red-800 w-full' onClick={handleButtonClick}>
        {isSignIn?"Sign In":"Sign Up"}
      </button>
      <p className='py-4 cursor-pointer' onClick={toggleSignIn}> {isSignIn?"New to Netflix? SignUp Now": "Already Member? SignIn Now"}</p>
    </form>
    </div>
    
  )
}

export default Login