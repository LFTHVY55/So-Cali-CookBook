import React from "react";
import { logout } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Cook Book
          </a>

          <div id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <div className="btn-group dropstart">



              <form className="form-inline my-2 my-lg-0">



                <div className="btn-group dropstart">



                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu">

                    <li>
                      <a aria-disabled className="dropdown-item" href="/account">
                        Account
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/recipes">
                        Recipes
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    {user?.isLoggedIn?


                      <li>
                        <a  href="/recipes" className="dropdown-item" onClick={async () => await dispatch(logout())}>
                          Logout
                        </a>
                      </li>

                      :

                      <li>
                        <a className="dropdown-item" href="/login">
                          Login
                        </a>
                      </li>

                    }

                  </ul>



                </div>




              </form>
              </div>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
