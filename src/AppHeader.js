import React from 'react';
import './AppHeader.css';
import logo from './images/logo.png';

function AppHeader() {
    return (
      <div className="AppHeader" id="no-print">
        <section className=" hide-on-small-only valign-wrapper row">
          <div className="col m4"><img className="" src={logo} alt="The Get Baking Logo"/></div>
          <div className="col m4">
            <a href="/home"><div><h1 className="center-align yellow-text text-accent-1">Get Baking!</h1></div></a>
          </div>
          <div className="col m4"><img className="" src={logo} alt="The Get Baking Logo"/></div>
        </section>
        <section className=" hide-on-med-and-up">
          <div><img className="" src={logo} alt="The Get Baking Logo"/></div>
          <div><a href="/home"><div><h1 className="center-align yellow-text text-accent-1">Get Baking!</h1></div></a></div>
        </section>
      </div>
    )
  }
  
  export default AppHeader