import Recipes from "./screens/recipes";
import Home from "./screens/home";
import Login from "./screens/login"
import RecipeDetail from "./screens/recipedetails";
import NewRecipe from "./screens/newRecipe";
import UpdateRecipe from "./screens/updateRecipe";
import Account from "./screens/account"
import Register from "./screens/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  return (
    <main className="">
      <Router>
        <ToastContainer />

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Recipes />} path="/recipes" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<RecipeDetail />} path="/recipes/:id" />
          <Route element={<NewRecipe />} path="/newRecipe" />
          <Route element={<UpdateRecipe />} path="/updateRecipe/:id" />
          <Route element={<Account />} path="/account" />
        </Routes>
      </Router>
    </main>
  );
};
export default App;
