import { React, useEffect } from "react";
import "../../App.css";
import CardContainer from "../../components/cardcontainer";
import Navbar from "../../components/navbar";
import { useDispatch, useSelector } from "react-redux";
// import { deleteReservation } from "../../store/actions/booksAction";
import AuthGuard from "../../components/authGuard"
import { accountDetails } from "../../store/actions/userAction";
import { logout } from "../../store/slices/userSlice";
function Account() {
  const dispatch = useDispatch();


  const user = useSelector((state) => state?.user);
  const isLoading = useSelector((state) => state?.user?.isLoading);

  useEffect(() => {
    if (user.isLoggedIn) {
      dispatch(accountDetails(user?.currentUser?.user_id));
    } else {
      dispatch(logout());
    }
  }, []);


  return (

    <AuthGuard>
      <div className="container-fluid">
        <Navbar />
        {isLoading ?

          <span style={{ height: '80vh', wifth: '100%', display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="spinner-border text-success" role="status">
            </div>
          </span>
          :

          <CardContainer
            recipes={user?.currentUser?.recipes}
            user={user}
            // returnBook={returnBook}
            account={true}
          />

        }
      </div>

    </AuthGuard>
  );
}

export default Account;
