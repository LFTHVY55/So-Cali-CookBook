import { React, useEffect } from 'react';
import '../../App.css';
import BookCardContainer from '../../components/carddetails';
import Navbar from '../../components/navbar';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../store/actions/recipeAction';
function App() {
  const dispatch = useDispatch();

  const { id } = useParams()
  useEffect(() => {
    dispatch(getRecipeDetails(id));
  }, []);
  const user = useSelector(state => state?.user)
  const recipeDetails = useSelector(state => state?.recipe?.recipeDetails)

  
  return (
    <div className="container-fluid w-100">
      <Navbar />
      <BookCardContainer recipe={recipeDetails} user={user} />
    </div>
  );
}

export default App;
