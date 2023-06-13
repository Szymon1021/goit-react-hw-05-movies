import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import './App.css';

import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Nav />
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
};