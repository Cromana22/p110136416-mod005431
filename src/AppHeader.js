import React from 'react';
import { Link } from "react-router-dom";

function AppHeader() {
    return (
      <div className="AppHeader">
        <p>This is the header</p>
        
        <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/nothing-here">Nothing Here</Link></li>
        </ul>
      </nav>

      </div>
    )
  }
  
  export default AppHeader