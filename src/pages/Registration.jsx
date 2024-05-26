import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";

const Registration = () => {
  const { createUser, user, loading } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [passMatch, setPassMatch] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirm_password) {
      setPassMatch(false);
    }
    if (data.password === data.confirm_password) {
      setPassMatch(true);
      await createUser(data.email, data.password);
    }
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
          <h1 className="text-5xl text-white font-bold">Register now!</h1>
          <p className="py-6 text-wrap text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card hero-overlay bg-opacity-95 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleCreateUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                name="confirm_password"
                required
                onChange={handleChange}
              />
            </div>
            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Passwords do not match!</p>
              </div>
            )}
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Login
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {loading ? "loading..." : "Register"}
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

export default Registration;
