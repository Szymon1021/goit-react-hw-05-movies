import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from 'Api/api';
import { Link, Outlet } from 'react-router-dom';
import { GoBackLink } from 'pages/GoBackLink';

function MoviesDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const movieId = Number(id);
  const src = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

  const backLink = '/movies';

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const movieDetails = await api.fetchGetMoviesDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {}
    };

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <div>
        <GoBackLink to={backLink}>
          <button> Go Back </button>
        </GoBackLink>
      </div>
      <div>
        <img src={src + movie.poster_path} alt={movie.title} />
        <h1>{movie.title}</h1>
      </div>
      <div>
        <p>User Score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {movie.genres &&
          movie.genres.map(({ id, name }) => <p key={id}>{name}</p>)}
      </div>

      <Link to="cast">
        <button>Cast</button>
      </Link>
      <Link to="reviews">
        <button>Reviews</button>
      </Link>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default MoviesDetails;
