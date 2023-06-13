import { Link } from 'react-router-dom';

function MovieList({ title, poster_path, name }) {
  const src = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
  return (
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
    >
      <Link to="/Movies/moviesId">
        <img src={src + poster_path} alt={title} />
        <p>{title ? title : name}</p>
      </Link>
    </li>
  );
}

export default MovieList;
