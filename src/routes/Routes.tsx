import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Dashboard } from '../features/manageVehicles/dashboard/Dashboard';
import { HomePage } from '../features/homePage/HomePage';

import { PATHS } from '../constants/paths';

export const AppRoutes = () => {

  return (
    <div className="main-container">
        <Routes>
            <Route path={PATHS.home.href} element={<HomePage/>}/>
            <Route path={PATHS.manageVehicles.href} element={<Dashboard/>}/>
        </Routes>
    </div>
  );
};