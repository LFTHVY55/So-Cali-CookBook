import { React, useEffect } from 'react';
import '../../App.css';
import CardContainer from '../../components/cardcontainer';
import Navbar from '../../components/navbar';
import { useDispatch, useSelector } from "react-redux";
import { getRecipesList } from '../../store/actions/recipeAction';

function Home() {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getRecipesList());
  }, []);
  const user = useSelector(state => state?.user)
  const isLoading = useSelector(state => state?.recipe?.isLoading)

  const makeReservation = async (id) => {
    const headers = { headers: { "Authorization": `Bearer ${user.token}` } }
    try {
      const res = await dispatch(checkoutBook({ id, headers }))

      if ((res?.payload?.book?.id)) {
        alert(`${res?.payload?.book?.title} has been checked out successfully!`)
      } else {

        alert(res?.payload?.message)
      }

      await dispatch(getBookDetails(id))

    } catch (error) {
      alert(error)

    }

  }





  return (
    <div className="container-fluid">
      <Navbar />

      {isLoading ?

        <span style={{ height: '80vh', wifth: '100%', display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="spinner-border text-success" role="status">
          </div>
        </span>
        :

        <CardContainer account={false} recipes={recipe?.recipesSearch} user={user}/>
      }
    </div>
  );
}

export default Home;
