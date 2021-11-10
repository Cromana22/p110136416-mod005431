import AppHeader from './AppHeader'
import AppPageTitle from './AppPageTitle'
import AppHomepage from './AppHomepage'
import AppBlog from './AppBlog'
import AppRecipeList from './AppRecipeList'
import AppFooter from './AppFooter'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppPageTitle />
      <AppHomepage />
      <AppBlog />
      <AppRecipeList />
      <AppFooter />
    </div>
  );
}

export default App;
