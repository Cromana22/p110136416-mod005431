import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout'
import AppHomepage from './AppHomepage'
import AppBlog from './AppBlog'
import AppRecipeList from './AppRecipeList'
import BlogMain from "./BlogMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} >
            <Route path="home" element={<AppHomepage/>} />
            <Route path="blog" element={<AppBlog/>} >
              <Route path="blog1" element={<BlogMain entry="blog1" />} />
              <Route path="blog2" element={<BlogMain entry="blog2" />} />
              <Route path="blog3" element={<BlogMain entry="blog3" />} />
              <Route path="blog4" element={<BlogMain entry="blog4" />} />
            </Route>
            <Route path="recipes" element={<AppRecipeList/>} />
            <Route path="*" element={<AppHomepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
