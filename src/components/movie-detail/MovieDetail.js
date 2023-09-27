import React from 'react';
import './moviedetail.css';
import YouTube from 'react-youtube';

function MovieDetail( {movie, trailerUrl} ) {
    const { name, title, overview, release_date, vote_average } = movie;
    const option = {
        heigth: "400",
        width: "100%",
        playerVar: {
            autoplay: 0
        }
    }
  return (
    <div className='detail'>
        <div className='data'>
            <h2>{ name || title }</h2>
            <hr />
            <h3>Release Date: {release_date}</h3>
            <h3>Vote: {vote_average}</h3>
            <p>{overview}</p>
        </div>
        <div>
            <YouTube
                videoId={trailerUrl}
                opts = {{
                    heigth : '400',
                    width : '100%',
                    playerVar: {
                        autoplay: 0
                    }}
                }
            />
        </div>
    </div>
  )
}

export default MovieDetail
