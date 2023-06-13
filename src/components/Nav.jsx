import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Movies">Movies</NavLink>
    </nav>
  );
}

export default Nav;
