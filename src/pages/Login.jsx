import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const { signIn, user, loading } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSign = async (e) => {
    e.preventDefault();
    await signIn(data.email, data.password);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left hero-overlay bg-opacity-95 rounded-md p-4">
          <h1 className="text-5xl text-white font-bold">Login now!</h1>
          <p className="py-6 text-wrap text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card hero-overlay bg-opacity-95 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSign}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
                onChange={handleChange}
              />
            </div>
            <label className="label">
              <Link
                to="/registration"
                className="label-text-alt link link-hover"
              >
                Registration
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {loading ? "loading..." : "Login"}
              </button>
            </div>
          </form>
          <div className="px-8 pb-5 form-control">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
