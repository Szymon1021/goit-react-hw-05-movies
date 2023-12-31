import { useState } from 'react';
import { api } from 'Api/api';
import MoviesFinder from './MoviesFinder';
import MoviesList from './MoviesList';

function Movies() {
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState('');

  const handleInput = evt => {
    evt.preventDefault();
    setSearch(evt.target.value);
  };

  const handleGetRequest = async e => {
    e.preventDefault();

    const response = await api.fetchSearchMovies(search);
    setQuery(response.results);
    console.log(response.results);
  };

  return (
    <div>
      <MoviesFinder
        handleGetRequest={handleGetRequest}
        handleInput={handleInput}
      ></MoviesFinder>
      <MoviesList querys={query}></MoviesList>
    </div>
  );
}

export default Movies;
