import React from 'react';
import './AppPageTitle.css';


function AppPageTitle(props) {
  const { title } = props

    return (
      <div className="AppPageTitle yellow-text text-accent-1">
        <h5>{title}</h5>
      </div>
    )
  }
  
  export default AppPageTitle