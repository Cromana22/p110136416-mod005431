import React from 'react';
import AppPageTitle from './AppPageTitle'
import useFetch from './scripts/useFetch.js';
import HomepageCard from './HomepageCard';

function AppHomepage() {
  const { response, loading, error } = useFetch("https://p110136416-1.free.beeceptor.com/blogs");

  return (
    <div className="AppHomepage">
      <AppPageTitle title="Welcome to Get Baking!" />
      <div className="pink lighten-4 deep-purple-text">

        <br />
        <p className="container center-align">Welcome to Get Baking! We are a collection of like minded people who love baking and want to encourage more people to bake at home.</p>
        <p className="container center-align">Thank you for joining us on this great adventure and we hope you have a tasty time!</p>
        <br />

        <div id="cardRow" className="container row">
          { loading && <p>{loading}</p> } {/* if loading, output loading */}
          { error && <p>{error}</p> } {/* if error, output error */}
          { response && <HomepageCard blogs={response} /> } {/* if loaded, put data into Bloglist as a prop */}
        </div>

      </div>
    </div>
  )
}
  
export default AppHomepage