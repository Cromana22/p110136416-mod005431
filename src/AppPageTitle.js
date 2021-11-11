import React from 'react';

function AppPageTitle(props) {
  const { name } = props

    return (
      <div className="AppPageTitle">
        <h2>{name}</h2>
      </div>
    )
  }
  
  export default AppPageTitle