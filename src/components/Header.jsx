import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser,removeUser } from '../utils/userSlice';
import {logo} from '../utils/constants';
import {toggleGptSearch} from '../utils/gptSlice';

const Header = () => {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const user =useSelector(store=>store.user);
  const gpt = useSelector(store=>store.gpt.showGptSearch);
  const handleSignOut = ()=>{
    signOut(auth).then(()=>{
      //signout logic
     
    }).catch((error)=>{
      //An error happened
      navigate("/error");
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        //signin
        const {uid,email,displayName,photoURL} =user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));
        navigate("/browse");
      }else{
        //sign out
        dispatch(removeUser());
        navigate("/");
      }

    });
    return ()=> unsubscribe();
  },[]);

  const handleGptSearch = ()=>{
    
    dispatch(toggleGptSearch());
  };

  return (
    <div className='absolute w-screen p-0 md:px-8 md:py-0 bg-gradient-to-b from-slate-500 z-10  flex flex-col md:flex-row justify-between '>
      <img className='w-44 mx-auto md:mx-0' 
      src = {logo} alt='logo'/>
    <div className='flex justify-center space-y-3'>
    {user && (<div className='flex flex-row p-2 '>
      <button className='bg-yellow-300 rounded-md mx-2 my-3 md:mr-5 p-4 font-bold ' 
      onClick={handleGptSearch}>
        {gpt?"HOME":"GPT Search"}
        </button>
      <img alt="usericon" src= {user.photoURL} className='hidden md:block my-auto w-12 h-12'/>
      <button onClick={handleSignOut} className='bg-blue-300 md:bg-transparent md:text-white rounded-md mx-auto my-3 md:mr-5 p-4 font-bold'> Sign Out</button>
    </div>)}
    </div>
    </div>
  );
};

export default Header;