
import React from 'react'
import Header from './Header'

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useNowPlaying from '../hooks/useNowPlaying.js';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
const Browse = () => {
  
  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcoming();


  return (
    <div>
      <Header/>
     {/* 
      MainContainer
        video Background
        video Title

      Secondary Container
        Movielist*n
          card list*n
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse