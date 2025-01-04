import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
    const {movieNames,movieResults} = useSelector(store=> store.gpt);
    if (!movieNames) return null;

    return (
    <div className='bg-black opacity-90 p-4 mt-4'>
        {
            movieNames.map((moviename,index)=> <MovieList key ={moviename} title = {moviename} movies={movieResults[index]}/>)
        } 
    </div>
  )
}

export default GptMovieSuggestion