import { useState, useEffect } from 'react';
import { api } from 'Api/api';

function Movies() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    api.fetchSearchMovies().then(query => {
      setQuery(query);
    });
  }, [query]);

  return (
    <form>
      <button type="submit">
        <span>Search movies </span>
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
}

export default Movies;
