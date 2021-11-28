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
      <p>{entry}</p>
    </>
  )
}

export default BlogContent