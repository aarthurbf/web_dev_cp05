import { Link } from "react-router-dom";
import { NavStyle } from "../css/NavStyle";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; 

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavStyle scrollY={scrollY}>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i>
            <FaBars />
          </i>
        </label>
        <label className="logo">GourmetOn</label>
        <ul>
          <li>
            <ScrollLink
              to="inicio"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80} 
            >
              Inicio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="produtos"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Produtos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contato"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contato
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </NavStyle>
  );
};

export default Nav;
