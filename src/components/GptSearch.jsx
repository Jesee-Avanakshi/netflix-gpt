import React from 'react'
import { netflix_bg } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
      <div  className='absolute -z-10'>
      <img src={netflix_bg} alt='backgroundImage' className='relative'/>
    </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch