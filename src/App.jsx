import { Outlet } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import GlobalStyle from "./css/GlobalStyle.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
