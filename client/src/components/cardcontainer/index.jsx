import React from "react";
import RecipeCard from "../recipecard";
import { searchRecipeList } from "../../store/slices/recipeSlice";
import { ChevronLeft, Frown } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react"
const CardContainer = ({ recipes, account, user }) => {
  const dispatch = useDispatch();
  const handleSearch = (searchQuery) => {
    dispatch(searchRecipeList({ searchQuery }));
  };
  const staticImages = ["https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-chicken-flautas-recipe.jpg", "https://www.tasteofhome.com/wp-content/uploads/2018/01/Slow-Cooker-Beef-Carnitas_EXPS_THCA17_76880_A6_01_3b.jpg","https://www.ambitiouskitchen.com/wp-content/uploads/fly-images/31819/Best-Guacamole-Youll-Ever-Eat-4sq-500x500-c.jpg","https://www.seriouseats.com/thmb/rkmijvOtxOQyH3D8n2q8uc67XNk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__04__20150323-cocktails-vicky-wasik-margarita-c84b154e757d43688de15dc8f8ca0de9.jpg","https://themodernnonna.com/wp-content/uploads/2022/06/Elotes-PNG.png"]


  const navigate = useNavigate()
  return (
    <div className="container-fluid pt-2">

      {account &&
        <button className="btn btn-success" type="button" onClick={() => navigate("/recipes")}>
          <ChevronLeft />
        </button>
      }
      {user?.currentUser?.username && user?.isLoggedIn && (
        <div className="row pt-2 pb-2 d-flex align-items-center">

          <div className="col-9">
            <h1>Welcome {user?.currentUser?.username || ""} </h1>
            <span>{user?.currentUser?.email || ""}</span>
          </div>


          <div style={{ display: "flex", justifyContent: 'flex-end' }} className="col-3">
            <button onClick={() => navigate("/newRecipe")} className="btn btn-success" type="button">
              <Plus /> New
            </button>

          </div>

        </div>
      )}

      <div className="row pt-2 pb-2">
        <div className="col-12">
          <form className="d-flex w-sm-50 w-lg-50 ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Recipes..."
              aria-label="Search"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
        </div>
      </div>


      <div className="row pt-5 gy-5 pb-5">

        {recipes?.length > 0 ?

          recipes?.map((recipe, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <RecipeCard image={staticImages[Math.floor(Math.random() * staticImages.length)]} recipe={recipe} user={user} account={account} />
            </div>
          ))

          :

          <div style={{ fontSize: "1.2rem", height: "80vh", gap: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Frown size="1.2rem" />  Sorry, no results found!
          </div>

        }
      </div>
    </div >
  );
};

export default CardContainer;
