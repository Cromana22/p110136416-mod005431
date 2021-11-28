import React from 'react';
import AppPageTitle from './AppPageTitle'
import {blogLinks} from "./scripts/blogLinks.js";

function AppBlog() {
    return (
      <div className="AppBlog">
        <AppPageTitle title="Get Baking Blog" />
        <div className="pink lighten-4 deep-purple-text row">

          <div className="col s12 m3">
            <ul id="blogLinks">
                <script src={blogLinks}></script>
            </ul>
          </div>

          <div className="col s12 m9">
            <p className="flow-text left-align">asdfas</p>
          </div>

        </div>
      </div>
    )
  }
  
  export default AppBlog