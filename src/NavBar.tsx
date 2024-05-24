import { NavLink } from "react-router-dom";


import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink to="/Login">
        Login
      </NavLink>
      <NavLink to="/AboutPage">About us</NavLink>
      <NavLink to="/HomePage">Home Page</NavLink>
    </nav>
  );
}

export default NavBar