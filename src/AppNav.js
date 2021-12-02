import React from 'react';
import { Link } from "react-router-dom";


function AppNav() {
    return (
      <div className="AppNav deep-purple-text" id="no-print">
        <nav className="yellow accent-1">
          <ul>
            <strong>
            <li><Link to="/home" className="deep-purple-text">Home</Link></li>
            <li><Link to="/blog" className="deep-purple-text">Blog</Link></li>
            <li><Link to="/recipes" className="deep-purple-text">Recipes</Link></li>
            </strong>
          </ul>
        </nav>
      </div>
    )
  }
  
  export default AppNav