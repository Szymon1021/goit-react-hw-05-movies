function MoviesDetailsInfo({ movies }) {
  const getGenresList = genres => {
    return genres.map(genre => genre.name).join(', ');
  };
  return (
    <div>
      {movies.map(md => {
        return (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${md.poster_path}`}
              alt=""
            />

            <h1>{md.title}</h1>
            <p>User Score: {md.vote_average}</p>
            <h3>Overview</h3>
            <p>{md.overview}</p>
            <h3>Genres</h3>
            <p>{getGenresList(md.genres)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MoviesDetailsInfo;
