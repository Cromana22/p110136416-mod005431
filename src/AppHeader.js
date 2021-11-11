import React from 'react';
import { Link } from "react-router-dom";

function AppHeader() {
    return (
      <div className="AppHeader">
        <section class="valign-wrapper row">
          <div class="container col s4"><a class="left" href="/home"><img src="logo.png" alt="Logo" /></a></div>
          <div class="container col s4"><h1 class="center-align">Get Baking!</h1></div>
          <div class="container col s4"></div>
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