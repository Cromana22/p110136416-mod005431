import React from 'react';
import { Link } from "react-router-dom";

function AppHeader() {
    return (
      <div className="AppHeader">
        <section>
          <a href="/home"><img src="logo.png" alt="Logo" /></a>
          <h1>Get Baking!</h1>
        </section>
       
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
  
  export default AppHeader