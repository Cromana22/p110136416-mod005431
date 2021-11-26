import React from 'react';
import { Link } from "react-router-dom";

function BlogList() {
    return (
      <div className="BlogList col s12 m3">
        <ul>
            <li><Link to="blog1">Blog list 1</Link></li>
            <li><Link to="blog2">Blog list 2</Link></li>
            <li><Link to="blog3">Blog list 3</Link></li>
            <li><Link to="blog4">Blog list 4</Link></li>
        </ul>
      </div>
    )
  }
  
  export default BlogList