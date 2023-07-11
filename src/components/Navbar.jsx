import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="#a">home</a>
        </li>
        <li className="navbar-link">
          <a href="#a">about us</a>
        </li>
        <li className="navbar-link">
          <a href="#a">features</a>
        </li>

        <li className="navbar-link">
          <a href="#a">solution</a>
        </li>
      </ul>
    </nav>
  );
}
