import React from "react";
import { Dashboard } from "../../features/manageVehicles/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/navBar/Navbar";
import { HomePage } from "../../features/homePage/HomePage";
import { Footer } from "../components/footer/Footer";

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
