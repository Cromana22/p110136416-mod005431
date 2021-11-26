import React from 'react';
import AppPageTitle from './AppPageTitle'

function AppHomepage() {
    return (
      <div className="AppHomepage">
        <AppPageTitle title="Welcome to Get Baking!" />
        <div className="pink lighten-4 deep-purple-text">
          <br />
          <p className="container center-align">Welcome to Get Baking! We are a collection of like minded people who love baking and want to encourage more people to bake at home.</p>
          <p className="container center-align">Thank you for joining us on this great adventure and we hope you have a tasty time!</p>
          <br />

          <div className="container row">
            <div className="col s12 m4">
              <div class="card medium hoverable yellow lighten-4">
                <div class="card-content deep-purple-text">
                <span class="card-title">Blog Title</span>
                <p>See our latest blog here</p></div>
              </div>
            </div>

            <div className="col s12 m4">
              <div class="card medium hoverable yellow lighten-4">
                <div class="card-content deep-purple-text">
                <span class="card-title">Blog Title</span>
                <p>See our latest blog here</p></div>
              </div>
            </div>

            <div className="col s12 m4">
              <div class="card medium hoverable yellow lighten-4">
                <div class="card-content deep-purple-text">
                <span class="card-title">Blog Title</span>
                <p>See our latest blog here</p></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
  
  export default AppHomepage