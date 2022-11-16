import React from "react";
import { Dashboard } from "../../../manageVehicles/components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "../navBar/Navbar";
import { HomePage } from "../../../homePage/HomePage";
import { Footer } from "../footer/Footer";

const App: React.FC = () => {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/manageVehicles" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
