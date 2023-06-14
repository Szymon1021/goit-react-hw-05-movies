import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from 'Api/api';

export const Cast = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const [cast, setCast] = useState();

  useEffect(() => {
    const getMovieCastbyId2 = async movieId => {
      try {
        const movieDetails = await api.fetchGetMoviesCredits(movieId);
        setCast(movieDetails);
      } catch (error) {}
    };

    getMovieCastbyId2(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const setProfile = profile_path => {
    if (profile_path === null || profile_path === undefined) {
      return 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg';
    }

    return `https://www.themoviedb.org/t/p/w500${profile_path}`;
  };

  return (
    <div>
      <h1>CAST</h1>
      {console.log(cast)}

      <ul>
        {cast.data.cast.map(
          ({ name, character, profile_path, id, original_name }) => {
            return (
              <li key={id}>
                <img src={setProfile(profile_path)} alt="actor" width="100" />
                <p>{name || original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
