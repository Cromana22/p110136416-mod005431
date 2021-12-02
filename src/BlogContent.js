import React from 'react';

function BlogContent(props) {
  const {blogs, blogId} = props;
  let entry = "";
  let image = "";
  let title = "";

  blogs.forEach(blog =>
  {
    if (blog.id === blogId)
    {
      title = blog.title;
      entry = blog.content;
      image = blog.image;
    }
  })

  return (
    <>
      <h3 className="center-align">{title}</h3>
      <div className="container"><div className="container"><img className="responsive-img" src={image} alt="blog"></img></div></div>
      <div className="container"><p className="flow-text">{entry}</p></div>
    </>
  )
}

export default BlogContent