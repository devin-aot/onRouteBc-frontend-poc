import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";

import { NavBar } from "./common/components/navBar/Navbar";
import { Footer } from "./common/components/footer/Footer";

const App: React.FC = () => {

  return (
    <>
      <Router>
        <NavBar/>
        <AppRoutes/>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
