import React from 'react';
import './AppHeader.css';


function AppHeader() {
    return (
      <div className="AppHeader">
        <section className="valign-wrapper row">
          <div className="container col s4"><a className="left" href="/home"><img src="logo.png" alt="Logo" /></a></div>
          <div className="container col s4"><h1 className="center-align yellow-text text-accent-1">Get Baking!</h1></div>
          <div className="container col s4"></div>
        </section>
      </div>
    )
  }
  
  export default AppHeader