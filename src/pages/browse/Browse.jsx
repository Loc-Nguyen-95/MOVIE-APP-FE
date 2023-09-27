import React from 'react';
import Banner from '../../components/banner/Banner';
import MovieList from '../../components/movie-list/MovieList';

import request from '../../api/request';

function Browse() {
  return (
    <div>
      <Banner /> 
      <MovieList title="Xu hướng" fetchUrl={request.fetchTrending} />
      <MovieList title="Xếp hạng cao" fetchUrl={request.fetchToprated} />
      <MovieList title="Hành động" fetchUrl={request.fetchActionMovies} />
      <MovieList title="Hài" fetchUrl={request.fetchComedymovies} />
      <MovieList title="Kinh dị" fetchUrl={request.fetchHorrorMovies} />
      <MovieList title="Lãng mạn" fetchUrl={request.fetchRomanceMovies} />
      <MovieList title="Tài liệu" fetchUrl={request.fetchDocumentaries} />
    </div>
  )
}

export default Browse
