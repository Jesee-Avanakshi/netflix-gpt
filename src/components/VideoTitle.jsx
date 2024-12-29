import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay, } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({title,overview}) => {
    return (
    <div className='absolute w-screen aspect-video pt-[20%] px-12 md:px-24 text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className='py-7 w-1/3'>{overview}</p>
        <div>
            <button className='bg-white rounded-md px-5 py-3 my-3 text-black font-bold hover:bg-opacity-80'>
            <FontAwesomeIcon icon={faPlay} style={{color: "#0a0000",}} />  Play Now 
            </button>
            <button className='bg-gray-500 rounded-md px-5 py-3 m-3 bg-opacity-50 hover:bg-opacity-80'>
            <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",}}/>  More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
