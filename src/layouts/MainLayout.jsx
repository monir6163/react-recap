import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
  const { user } = useAuth();
  return (
    <>
      {!user ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
