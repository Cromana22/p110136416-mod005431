import React from 'react';
import { useParams } from 'react-router';
import useFetch from './scripts/useFetch';
import BlogContent from './BlogContent';

function BlogMain() {
  const { response, loading, error } = useFetch("https://p110136416-1.free.beeceptor.com/blogs");
  let {id} = useParams();

  return (
    <div className="BlogMain col pink lighten-4">
      { loading && <p>{loading}</p> } {/* if loading, output loading */}
      { error && <p>{error}</p> } {/* if error, output error */}
      { response && <BlogContent blogs={response} blogId={id} /> } {/* if loaded, put data into Bloglist as a prop */}
    </div>
  )
  }
  
  export default BlogMain