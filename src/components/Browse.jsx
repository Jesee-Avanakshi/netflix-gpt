
import React from 'react'
import Header from './Header'

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useNowPlaying from '../hooks/useNowPlaying.js';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  

  return (
    <div>
      <Header/>
      {
        showGptSearch?(<GptSearch/>):(<><MainContainer/>
        <SecondaryContainer/></>)
      }
      
      
    </div>
  )
}

export default Browse