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
  useEffect(() => {
    // dispatch(getBooksList());
  }, []);


  const user = useSelector((state) => state?.user);
  const isLoading = useSelector((state) => state?.user?.isLoading || state?.book?.isLoading);

  const returnBook = async (id) => {
    if (user.token) {
      const headers = { headers: { "Authorization": `Bearer ${user.token}` } }
      // await dispatch(deleteReservation({ id, headers }))
      await dispatch(accountDetails(headers.headers))
    } else {
      dispatch(logout())
    }
  }





  useEffect(() => {
    if (user.token) {
      const headers = { headers: { Authorization: `Bearer ${user.token}` } };
      dispatch(accountDetails(headers.headers));
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
            books={user?.currentUser?.books}
            user={user}
            returnBook={returnBook}
            account={true}
          />

        }
      </div>

    </AuthGuard>
  );
}

export default Account;
