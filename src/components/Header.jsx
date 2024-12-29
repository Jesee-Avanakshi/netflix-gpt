import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser,removeUser } from '../utils/userSlice';
import {logo} from '../utils/constants';

const Header = () => {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const user =useSelector(store=>store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(()=>{
      //signout logic
     
    }).catch((error)=>{
      //An error happened
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        //signin
        const {uid,email,displayName,photoURL} =user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));
        navigate("/browse")
      }else{
        //sign out
        dispatch(removeUser());
        navigate("/")
      }

    });
    return ()=> unsubscribe();
  },[])


  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      
      <img className='w-32' 
      src = {logo} alt='logo'/>
    {user && (<div className='flex p-2'>
      <img alt="usericon" src= {user.photoURL} className='w-12 h-12'/>
      <button onClick={handleSignOut} className='text-bold text-white'> (Sign Out)</button>
    </div>)}
    </div>
  )
}

export default Header 