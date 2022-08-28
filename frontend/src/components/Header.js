import logo from "../images/logohead.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип" />
      <nav className="header__auth">
        <p className="header__link">{props.mail}</p>
        <Link to={props.route} className="header__link button" type="button" onClick={props.onClick}>{props.title}</Link>
      </nav>
    </header>
  );
}

export default Header;
