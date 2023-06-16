function MovieGenres({ movies }) {
  return (
    <div>
      {movies?.genres.map(({ id, name }) => {
        return <p key={id}>{name}</p>;
      })}
    </div>
  );
}

export default MovieGenres;
