import { useState } from 'react';
import { api } from 'Api/api';
import MoviesFinder from './MoviesFinder';
import MoviesComponents from './MoviesComponent';

function Movies() {
  const [query, setQuery] = useState([]);

  const handleInput = evt => {
    evt.preventDefault();
    setQuery(evt.target.value);
  };
  const handleGetRequest = async e => {
    e.preventDefault();

    const response = await api.fetchSearchMovies(query);
    setQuery(response);
    console.log(response);
  };

  return (
    <div>
      <MoviesFinder
        handleGetRequest={handleGetRequest}
        handleInput={handleInput}
      ></MoviesFinder>

      <MoviesComponents movies={query}></MoviesComponents>
    </div>
  );
}

export default Movies;
