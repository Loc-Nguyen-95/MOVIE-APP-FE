import React, {useState, useEffect} from 'react';
import './banner.css';
import instance from '../../api/axios';
import request from '../../api/request';
import base_url from '../../api/baseUrl';

function Banner() {
    const [movie, setMovie] = useState('');
    useEffect(() => {
        async function fetchData () {
            const response = await instance.get(request.fetchNetflixOrinals);
            setMovie(response.data.movies[ Math.floor(Math.random() * response.data.movies.length - 1)]);
            return response;
        }
        fetchData();
    }, [])
    console.log(movie)
  return (
    <div>
      <header 
        className='banner'
        style={{
            backgroundImage: `url(${base_url}${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}
      >
        <div className='banner-contents'>
            <h1 className='banner-title'>{movie.title || movie.name || movie.orinal_title}</h1>
            <button className='banner-button'>Play</button>
            <button className='banner-button'>My List</button>
            <h4 className='banner-description'>{movie.overview}</h4> 
        </div>
      </header>
    </div>
  )
}

export default Banner
