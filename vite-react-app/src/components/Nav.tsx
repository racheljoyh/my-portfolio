import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};
