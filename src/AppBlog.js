import React from 'react';
import AppPageTitle from './AppPageTitle'
import BlogList from './BlogList';
import { Outlet } from "react-router-dom";

function AppBlog() {
    return (
      <div className="AppBlog">
        <AppPageTitle title="Get Baking Blog" />
        <div className="pink lighten-4 deep-purple-text row">
          <BlogList />
          <Outlet />
        </div>
      </div>
    )
  }
  
  export default AppBlog