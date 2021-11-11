import React from 'react';
import AppPageTitle from './AppPageTitle'
import BlogList from './BlogList';
import { Outlet } from "react-router-dom";

function AppBlog() {
    return (
      <div className="AppBlog">
        <AppPageTitle title="Get Baking! Blog" />
        <BlogList />
        <Outlet />
      </div>
    )
  }
  
  export default AppBlog