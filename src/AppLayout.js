import React from 'react';
import { Outlet } from "react-router-dom";
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

function AppLayout() {
    return (
      <div className="AppLayout">
        <AppHeader />
        <Outlet />
        <AppFooter />
      </div>
    )
  }
  
  export default AppLayout