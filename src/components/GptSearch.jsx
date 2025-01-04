import React from 'react';
import { netflix_bg } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
  return (
    <div>
      <div  className='fixed -z-10'>
      <img src={netflix_bg} alt='backgroundImage' className='h-screen object-cover'/>
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
      
    </div>
  );
};

export default GptSearch;