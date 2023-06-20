import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MoviesList({ querys }) {
  const src = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gridColumnGap: '20px',
        gridRowGap: '20px',
      }}
    >
      {querys.map(q => {
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
            key={q.id}
          >
            <Link to={`/Movies/${q.id}`}>
              <img src={src + q.poster_path} alt={q.title} />
              <p>{q.title ? q.title : q.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
MoviesList.propTypes = {
  querys: PropTypes.array.isRequired,
};

export default MoviesList;
