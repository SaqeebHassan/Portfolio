import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

function Root() {
  return (
    <>
      <Navbar />
      <div className="absolute mt-11 md:mt-14 w-full">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Root;
