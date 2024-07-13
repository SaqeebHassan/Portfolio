import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import Shimmer from "../custom/Shimmer";

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed
  }, []);

  if (isLoading) {
    return <Shimmer />;
  }
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
