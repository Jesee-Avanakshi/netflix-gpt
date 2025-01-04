import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay, } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({title,overview}) => {
    return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 md:pt-[12%] absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:block py-6 text-lg w-1/2'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black py-1 md:py-2 px-3 md:px-12 text-md  rounded-lg hover:bg-opacity-80'>
            <FontAwesomeIcon icon={faPlay} style={{color: "#0a0000",}} />  Play Now 
            </button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 rounded-lg px-5 py-3 m-3 bg-opacity-50 hover:bg-opacity-80'>
            <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",}}/>  More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
