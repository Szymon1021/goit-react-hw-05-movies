function MoviesFinder(props) {
  return (
    <form onSubmit={props.handleGetRequest}>
      <button type="submit">
        <span>Search movies </span>
      </button>

      <input
        onChange={props.handleInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
}

export default MoviesFinder;
