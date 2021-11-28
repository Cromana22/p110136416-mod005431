import React from 'react';
import { Link } from 'react-router-dom';

function BlogLinks(props) {
  let { blogs } = props

  function sortByDate(array, key)
  {
    return array.sort(function(a, b)
    {
      var x = a[key]; var y = b[key];
      return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
  }

  blogs = sortByDate(blogs, 'date');

  return (
    <>
      {blogs.map((blog) => (
          <li key={blog.id}>
              <Link to={blog.id}>{blog.date}: {blog.title}</Link>
          </li>
      ))}      
    </>
  )
}

export default BlogLinks