import { React } from "react";
import { loginUser } from "../../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.user?.isLoading);
  const dispatch = useDispatch();



  const handleSubmit = async (values) => {
    values.preventDefault()
    const userInfo = {
      email: values?.target?.email?.value,
      password: values?.target?.password?.value
    }

    try {
      const res = await dispatch(loginUser(userInfo));

      if ((res.payload?.status === 200)) {
        navigate("/recipes");
      } else {
        toast.info(res.payload?.error?.message || "Something went wrong")
      }

    } catch (error) {
      toast.info(res.payload?.error?.message || "Something went wrong")
    }
  };



  return (
    <div className="container-fluid">
      <div className="row g-3 text-center py-5">
        <h1>Welcome Back</h1>
      </div>
      <div className="row text-center py-1">
        <p>Enter your crediential to login to your account</p>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12  justify-content-center">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">

              <form action="form" className="container" onSubmit={handleSubmit}>

                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      aria-label="Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      required
                    />
                  </div>





                  <button style={{ width: "100%" }} type="submit" className="btn btn-success px-4">
                    {isLoading && <span className="spinner-border spinner-border-sm" style={{ marginRight: "0.5rem" }} role="status" aria-hidden="true"></span>}

                    Login
                  </button>
                  <span style={{ textAlign: "center" }}>or</span>


                  <button style={{ width: "100%" }} type="button" onClick={() => navigate("/recipes")} className="btn btn-outline-success">
                    View Recipes list
                  </button>









                  <div className="col-12 text-end">
                    <a href="/register">Create an account</a>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
