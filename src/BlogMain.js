import React from 'react';

function BlogMain(props) {
  const { entry } = props

    return (
      <div className="BlogMain col s12 m9">
        <p className="flow-text left-align">{entry}</p>
      </div>
    )
  }
  
  export default BlogMain