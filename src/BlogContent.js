import React from 'react';

function BlogContent(props) {
  const {blogs, blogId} = props;
  let entry = "";

  blogs.forEach(blog =>
  {
    if (blog.id === blogId)
    {
      entry = blog.content;
    }
  })

  return (
    <>
      <p className="flow-text">{entry}</p>
    </>
  )
}

export default BlogContent