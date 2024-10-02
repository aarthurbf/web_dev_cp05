import { Link } from "react-router-dom";
import { NavStyle } from "../css/NavStyle";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  return(
  <NavStyle>
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i>
          <FaBars />
        </i>
      </label>
      <label className="logo">GourmetOn</label>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Produtos</Link>
        </li>
        <li>
          <Link to="/">Contato</Link>
        </li>
      </ul>
    </nav>
  </NavStyle>
  )
};

export default Nav;
