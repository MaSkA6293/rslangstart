import "./index.scss";
import classnames from "classnames";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <ul className={classnames("nav-list", "list")}>
        <li className="list__item">
          <Link to="/">MainPage</Link>
        </li>
        <li className="list__item">
          <Link to="/dictionary">Dictionart</Link>
        </li>
        <li className="list__item">
          <Link to="/audioCall">AudioCall</Link>
        </li>
        <li className="list__item">
          <Link to="/sprint">SprintGame</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
