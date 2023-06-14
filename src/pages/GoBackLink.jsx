import { Link } from 'react-router-dom';

export const GoBackLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};
