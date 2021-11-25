import React from 'react';
import { Link } from "react-router-dom";


function AppNav() {
    return (
      <div className="AppNav">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
  
  export default AppNav