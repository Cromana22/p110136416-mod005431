import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout'
import AppHomepage from './AppHomepage'
import AppBlog from './AppBlog'
import AppRecipes from './AppRecipes'
import BlogMain from "./BlogMain";
import RecipeAdd from "./RecipeAdd";

function App() {
  return (
    <div className="App pink accent-1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} >
            <Route path="" element={<AppHomepage/>} />
            <Route path="home" element={<AppHomepage/>} />
            <Route path="blog" element={<AppBlog/>} >
              <Route path=":id" element={<BlogMain />} />
            </Route>
            <Route path="recipes/addRecipe" element={<RecipeAdd />} />
            <Route path="recipes" element={<AppRecipes/>} />
            <Route path="*" element={<AppHomepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
