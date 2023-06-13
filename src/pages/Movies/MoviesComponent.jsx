import MovieList from './MovieList';

function MoviesComponents(query) {
  <ul>
    {query.map(q => {
      return <MovieList movie={q.movie}></MovieList>;
    })}
  </ul>;
}

export default MoviesComponents;
