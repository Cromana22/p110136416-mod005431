import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout'
import AppHomepage from './AppHomepage'
import AppBlog from './AppBlog'
import AppRecipeList from './AppRecipeList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} >
            <Route path="home" element={<AppHomepage/>} />
            <Route path="blog" element={<AppBlog/>} />
            <Route path="recipes" element={<AppRecipeList/>} />
            <Route path="*" element={<AppHomepage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
