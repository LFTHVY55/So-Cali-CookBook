import Recipes from "./screens/recipes";
import Home from "./screens/home";
import Login from "./screens/login"
import RecipeDetail from "./screens/recipedetails";
import Account from "./screens/account"
import Register from "./screens/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {


  return (
    <main className="">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Recipes />} path="/recipes" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<RecipeDetail />} path="/recipes/:id" />
          <Route element={<Account />} path="/account" />
        </Routes>
      </Router>
    </main>
  );
};
export default App;
