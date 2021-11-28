import React from 'react';
import AppPageTitle from './AppPageTitle'
import script from './scripts/homepageCards.js';

function AppHomepage() {
  return (
    <div className="AppHomepage">
      <AppPageTitle title="Welcome to Get Baking!" />
      <div className="pink lighten-4 deep-purple-text">

        <br />
        <p className="container center-align">Welcome to Get Baking! We are a collection of like minded people who love baking and want to encourage more people to bake at home.</p>
        <p className="container center-align">Thank you for joining us on this great adventure and we hope you have a tasty time!</p>
        <br />

        <div id="cardRow" className="container row">
          <script src={script}></script>
        </div>

      </div>
    </div>
  )
}
  
export default AppHomepage