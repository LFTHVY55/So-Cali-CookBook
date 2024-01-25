import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react"
import Navbar from '../../components/navbar';
import { getRecipeDetails, updateRecipe } from "../../store/actions/recipeAction";
import { useParams } from "react-router-dom";
import { createRecipe } from "../../store/actions/recipeAction";
import { toast } from "react-toastify";

import AuthGuard from "../../components/authGuard"
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(getRecipeDetails(id));
  }, []);


  const isLoading = useSelector((state) => state.user?.isLoading);
  const user = useSelector((state) => state.user);
  const recipe = useSelector((state) => state.recipe?.recipeDetails);

  const handleSubmit = async (values) => {
    values.preventDefault()
    const recipeInfo = {
      title: values?.target?.title?.value,
      description: values?.target?.description?.value,
      ingredients: values?.target?.ingredients?.value,
      instructions: values?.target?.instructions?.value,
      cooking_time: parseInt(values?.target?.cooking_time?.value),
      user_id: user?.currentUser?.user_id,
      recipe_id: recipe?.recipe_id,

    }

    try {
      const res = await dispatch(updateRecipe(recipeInfo));
      if (res?.type === "recipe/updateRecipe/fulfilled") {
        navigate(`/recipes/${res?.payload?.recipe?.recipe_id}`);
        toast.success("Recipe Updated")

      } else {
        toast.info(res?.payload?.error?.message || "Something went wrong")
      }
    } catch (error) {
      toast.info(res?.payload?.error?.message || "Something went wrong")
    }
  };


  return (

    <AuthGuard>
    <div className="container-fluid w-100">


      <Navbar />

      <div className="container-fluid pt-2">


        <button className="btn btn-success" type="button" onClick={() => navigate("/recipes")}>
          <ChevronLeft />
        </button>



        <div className="row g-3 text-center py-5">
          <h1>Update Your Recipe!</h1>
        </div>
        <div className="row text-center py-1">
          <p>Publish your updated recipe to the world</p>
        </div>


        <RecipeForm isLoading={isLoading} handleSubmit={handleSubmit} />
      </div>
    </div>
    </AuthGuard>
  );
};

export default Login;
