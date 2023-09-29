import React, { useEffect, useState } from 'react';
import './searchresult.css';
import instance from '../../api/axios';
import request from '../../api/request';

function SearchResult( {query} ) {
  console.log(query)
  const url = `${request.fetchSearch}&query=${query}`;
  const image_url = 'https://image.tmdb.org/t/p/original';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const response = await instance.get(url);
      console.log('response :', response);
      setMovies(response.data.movies);
      return response;
    }
    fetchData();
  }, [])
  return (
    <div className='search-result-container'>
      {
        movies.map(movie => (
          <img 
            key={movie.id}
            className='row_poster row_posterLarge'
            src={image_url + movie.poster_path}
            alt={movie.name}
          />
        ))
      }
    </div>
  )
}

export default SearchResult
