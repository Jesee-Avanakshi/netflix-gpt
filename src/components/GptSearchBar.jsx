import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import client from '../utils/openAI';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Search movie in TMDB
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+ movie + "&include_adult=false&language=en-US&page=1",API_OPTIONS);

    const json =await data.json();

    return json.results;

  }

  const  handleGPTSearch = async ()=>{
    console.log(searchText.current.value);
    //API call to GPT to get data

    const gptQuery ="Act as a Movie Recommendation System and Suggest movies for the query : " + searchText.current.value+ " . Only give names of 5 movies,comma seperated movies like the example result given ahead. Example: Neeve Neeve, Don, Gadar, Sholay, Rab Ne banadi jodi";  

    const gptResults = await client.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
    
    if (!gptResults.choices){
        //Error Handling
       
    }
    

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    
    const tmdbResults = await Promise.all(promiseArray);
    
    
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    
  };



  return (
    <div className=' pt-[40%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black rounded-lg grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input type="text" ref = {searchText} className='p-4 m-0 md:m-4 col-span-9 rounded-sm md:rounded-lg' placeholder='what do you wanna watch today?'/>
            <button type ="submit" className='py-0 md:py-2 px-0 md:px-4 m-0 md:m-4 bg-red-700 col-span-3 text-white rounded-sm md:rounded-lg'
            onClick={handleGPTSearch}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar