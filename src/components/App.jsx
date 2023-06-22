import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import './App.css';
import { lazy, Suspense } from 'react';

export const App = () => {
  const MoviesDetails = lazy(() => import('pages/Movies/MoviesDetails'));
  const Movies = lazy(() => import('pages/Movies/Movies'));
  const Cast = lazy(() => import('components/Cast'));
  const Reviews = lazy(() => import('components/Reviews'));

  return (
    <div>
      <Nav />

      <hr />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/Movies" element={<Movies />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
