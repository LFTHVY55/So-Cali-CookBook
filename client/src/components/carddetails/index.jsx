import React from "react";
import RecipeCard from "../recipecard";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
const BookCardContainer = ({ recipe, user }) => {

  const navigate = useNavigate()
  return (
    <div className="container-fluid pt-2">


      {
        <button className="btn btn-success" type="button" onClick={() => navigate("/recipes")}>
          <ChevronLeft />
        </button>
      }

      <div className="row pt-5 gy-5 pb-5">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12 mx-auto">
          <RecipeCard details recipe={recipe} user={user} acount={false} />
        </div>
      </div>
    </div>
  );
};

export default BookCardContainer;