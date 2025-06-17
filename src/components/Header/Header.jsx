import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} />
        </Link>
        <nav>
          <Link to="/Stories">
            <p>STORIES</p>
          </Link>
          <Link to="/Features">
            <p>FEATURES</p>
          </Link>
          <Link to="/Pricing">
            <p>PRICING  </p>
          </Link>
        </nav>

        <button>
          <p>GET AN INVITE</p>
        </button>
      </header>
    </>
  );
}

export default Header;
