import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import './App.css';
export const App = () => {
  return (
    <div>
      <Nav />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
