import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Dashboard } from '../features/manageVehicles/dashboard/Dashboard';
import { HomePage } from '../features/homePage/HomePage';

export const AppRoutes = () => {
  return (
    <div className="main-container">
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/manageVehicles" element={<Dashboard/>}/>
        </Routes>
    </div>
  );
};