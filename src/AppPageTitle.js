import React from 'react';

function AppPageTitle(props) {
  const { title } = props

    return (
      <div className="AppPageTitle">
        <h2>{title}</h2>
      </div>
    )
  }
  
  export default AppPageTitle