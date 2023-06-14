import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import './App.css';

import Movies from 'pages/Movies/Movies';
import MoviesDetails from 'pages/Movies/MoviesDetails/MoviesDetails';
import Cast from 'pages/Movies/MoviesDetails/Cast';
import Reviews from 'pages/Movies/MoviesDetails/Reviews';

export const App = () => {
  return (
    <div>
      <Nav />
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/Movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
};
