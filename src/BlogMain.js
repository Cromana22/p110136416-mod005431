import React from 'react';

function BlogMain(props) {
  const { entry } = props

    return (
      <div className="BlogMain">
        <h2>{entry}</h2>
      </div>
    )
  }
  
  export default BlogMain