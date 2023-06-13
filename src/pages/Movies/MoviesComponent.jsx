import MovieList from './MovieList';

function MoviesComponents(querys) {
  <ul>
    {querys.map(q => {
      return (
        <MovieList
          key={q.id}
          title={q.tittle}
          poster_path={q.poster_path}
          name={q.name}
        ></MovieList>
      );
    })}
  </ul>;
}

export default MoviesComponents;
