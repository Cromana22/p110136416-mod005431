import React from 'react';
import './AppHeader.css';
import logo from './images/cupcake.png';

function AppHeader() {
    return (
      <div className="AppHeader">
        <section className="valign-wrapper row">
          <div className="container col s4 left-align"><img src={logo} alt="The Get Baking Logo" height="200"/></div>
          <a className="container col s4" href="/home">
            <div><h1 className="center-align yellow-text text-accent-1">Get Baking!</h1></div>
          </a>
          <div className="container col s4 right-align"><img src={logo} alt="The Get Baking Logo" height="200"/></div>
        </section>
      </div>
    )
  }
  
  export default AppHeader