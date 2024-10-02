import styled from "styled-components";

export const NavStyle = styled.nav`
  nav {
    background: var(--color3);
    height: 80px;
    width: 100%;
    position: relative;
    z-index: 1000;
  }

  label.logo {
    color: var(--color7);
    font-size: 25px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;
  }

  nav ul {
    float: right;
    margin-right: 20px;
  }

  nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
  }

  nav ul li a {
    color: var(--color7);
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
  }

  a.active,
  a:hover {
    background: var(--color2);
    transition: 0.5s;
  }

  .checkbtn {
    font-size: 22px;
    color: var(--color6);
    float: right;
    line-height: 80px;
    margin-right: 30px;
    cursor: pointer;
    display: none;
  }

  #check {
    display: none;
  }

  @media (max-width: 1050px) {
    label.logo {
      padding-left: 30px;
    }

    nav ul li a {
      font-size: 16px;
    }
  }

  @media (max-width: 890px) {
    .checkbtn {
      display: block;
    }

    label.logo {
      font-size: 22px;
    }

    ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: var(--color1);
      top: 80px;
      left: -100%;
      text-align: center;
      transition: all 0.5s;
      z-index: 2000;
    }

    nav ul li {
      display: block;
      margin: 50px 0;
      line-height: 30px;
    }

    nav ul li a {
      font-size: 20px;
    }

    a:hover,
    a.active {
      background: none;
      color: var(--color2);
    }

    #check:checked ~ ul {
      left: 0;
    }
  }
`;
