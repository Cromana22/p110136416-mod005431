import React from 'react';
import { Outlet } from "react-router-dom";
import AppHeader from './AppHeader'
import AppPageTitle from './AppPageTitle'
import AppFooter from './AppFooter'

function AppLayout() {
    return (
      <div className="AppLayout">
        <AppHeader />
        <AppPageTitle />
        <Outlet />
        <AppFooter />
      </div>
    )
  }
  
  export default AppLayout