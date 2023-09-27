import React, { useState, useEffect } from 'react';
import './movielist.css';
import instance from '../../api/axios';
import base_url from '../../api/baseUrl';

import MovieDetail from '../movie-detail/MovieDetail';

function MovieList({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {

        async function fetchData() {
            const response = await instance.get(fetchUrl);
            setMovies(response.data.movies);
            return response;
        }
        fetchData();

    }, [fetchUrl]);

    // console.log(movies); 

    function handleClick(movie) {
        if (selectedMovie && selectedMovie.id === movie.id) {
            setSelectedMovie(null);
            setTrailerUrl('')
        } else {
            //synchronous
            instance.post('/api/movies/video?token=8qlOkxz4wq', { id: movie.id })
                .then(response => {
                    setSelectedMovie(movie);
                    setTrailerUrl(response.data.key) //!
                })
                .catch(error => console.log(error))
        }
    }

    console.log(trailerUrl);

    return (
        <div className='row'>

            <h2 className='title'>{title}</h2>

            <div className='posters scroll'>
                {movies.map(movie => {
                    return <img
                        className='poster'
                        src={base_url + movie.backdrop_path}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                })}
            </div>

            <div>
                {selectedMovie && <MovieDetail movie={selectedMovie} key={trailerUrl} />}
            </div>
        </div>
    )
}

export default MovieList;
