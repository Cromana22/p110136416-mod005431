import React from 'react';
import { Outlet } from "react-router-dom";
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AppNav from './AppNav';

function AppLayout() {
    return (
      <div className="AppLayout">
        <AppHeader />
        <AppNav />
        <Outlet />
        <AppFooter />
      </div>
    )
  }
  
  export default AppLayout