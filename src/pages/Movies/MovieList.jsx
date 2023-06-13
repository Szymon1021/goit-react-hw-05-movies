import { Link } from 'react-router-dom';

function MovieList({ movie }) {
  const src = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
  return (
    <div
      style={{
        width: '80%',
        height: '80%',
      }}
    >
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(5, 1fr)',
          gridColumnGap: '20px',
          gridRowGap: '20px',
        }}
      >
        {movie.map(m => (
          <li
            style={{
              listStyle: 'none',
              width: '220px',
              height: '400px',
              margin: '10px',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #ccc',
              fontSize: '20px',
            }}
            key={m.id}
          >
            <Link to="/Movies/moviesId">
              <img src={src + m.poster_path} alt={m.title} />
              <p>{m.title ? m.title : m.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
