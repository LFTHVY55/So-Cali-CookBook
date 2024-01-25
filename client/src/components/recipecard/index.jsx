import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Undo2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../store/actions/recipeAction";
const RecipeCard = ({ recipe, details, user, account, image }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "100%" }}>
      {image && <img class="card-img-top" style={{ width: "100%", height: "180px" }} src={image} alt="Recipe image" />}

      {recipe?.user_id === user?.currentUser?.user_id && (
        <div class="card-header d-flex justify-content-between align-items-center">
          Yours
          <button
            onClick={() => navigate(`/updateRecipe/${recipe?.recipe_id}`)}
            className="btn btn-outline-success"
            type="button"
          >
            Update
          </button>
        </div>
      )}

      <div className="card-body">
        <h5
          onClick={() => navigate(`/recipes/${recipe.recipe_id}`)}
          className="card-title intro-title"
        >
          {recipe?.title}
        </h5>
        <p
          onClick={() => navigate(`/recipes/${recipe.recipe_id}`)}
          className="card-text intro-book"
        >
          {recipe?.description}
        </p>

        <div style={{ gap: "10px" }} className="d-flex mb-4">
          <p className="card-subtitle text-muted">Ingredients : </p>
          <p className="card-subtitle text-muted card-text intro-book">
            {recipe?.ingredients}
          </p>
        </div>

        {details && (
          <div style={{ gap: "10px" }} className="d-flex mb-4">
            <p className="card-subtitle text-muted">Instructions : </p>
            <p className="card-subtitle text-muted card-text intro-book">
              {recipe?.instructions}
            </p>
          </div>
        )}

        <div className="d-flex justify-content-between">
          <span className="d-flex justify-content-between align-items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clock-history"
              viewBox="0 0 16 16"
            >
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <p className="card-text">{recipe?.cooking_time} mins</p>
          </span>

          <span className="d-flex justify-content-between align-items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            <p className="card-text">{recipe?.user_username}</p>
          </span>
        </div>

        {account && (
          <div
            className={`d-grid gap-2 ${details ? "col-6" : "col-12"
              }  mx-auto mt-4`}
          >
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={() => dispatch(deleteRecipe(recipe?.recipe_id))}
            >
              <Undo2 /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
