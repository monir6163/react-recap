import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { logOut } = useAuth();
  const handleLogout = async () => {
    const isConfirmed = window.confirm("Are you sure you want to Logout?");
    if (isConfirmed) {
      await logOut();
    }
  };
  return (
    <div className="w-64 shadow-xl bg-slate-900 text-white h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <ul>
          <li className="mb-4">
            <Link
              to="/dashboard"
              className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
                pathname === "/dashboard"
                  ? "bg-indigo-500 text-white"
                  : "text-[#404040f6] bg-white"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/dashboard/all-dogs"
              className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
                pathname === "/dashboard/all-dogs"
                  ? "bg-indigo-500 text-white"
                  : "text-[#404040f6] bg-white"
              }`}
            >
              All Dogs
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/dashboard/add-dogs"
              className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
                pathname === "/dashboard/add-dogs"
                  ? "bg-indigo-500 text-white"
                  : "text-[#404040f6] bg-white"
              }`}
            >
              Add Dogs
            </Link>
          </li>

          <li className="mb-4">
            <a
              href="#"
              className="px-3 py-2 bg-white text-black hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
