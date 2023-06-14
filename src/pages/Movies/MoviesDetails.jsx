import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from 'Api/api';
import { Link } from 'react-router-dom';
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
        console.log(movieDetails);
      } catch (error) {}
    };

    getMovieDetails(movieId);
  }, [movieId]);

  const getGenresList = genres => {
    return genres.map(genre => genre.name).join(', ');
  };

  return (
    <div>
      <GoBackLink to={backLink}>
        <button> Go Back </button>
      </GoBackLink>

      <img src={src + movie.poster_path} alt={movie.title} />
      <h1>{movie.title}</h1>

      <p>User Score: {movie.vote_average}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{getGenresList(movie.genres)}</p>

      <Link to="cast">
        <button>Cast</button>
      </Link>
      <Link to="reviews">
        <button>Reviews</button>
      </Link>
    </div>
  );
}

export default MoviesDetails;
