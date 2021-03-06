import React from 'react';
import AppPageTitle from './AppPageTitle'
import useFetch from './scripts/useFetch.js';
import BlogLinks from './BlogLinks';
import { Outlet } from 'react-router';

function AppBlog() {
  const { response, loading, error } = useFetch("https://p110136416-2.free.beeceptor.com/blogs");
  
  return (
    <div className="AppBlog">
      <AppPageTitle title="Get Baking Blog" />
      <div className="pink lighten-5 deep-purple-text row">
        <div className="col s12 m3">
          <ul>
            { loading && <p>{loading}</p> } {/* if loading, output loading */}
            { error && <p>{error}</p> } {/* if error, output error */}
            { response && <BlogLinks blogs={response} /> } {/* if loaded, put data into Bloglist as a prop */}
          </ul>
        </div>
        <div className="col s12 m9">
          <Outlet />
        </div>

      </div>
    </div>
  )
  }
  
  export default AppBlog