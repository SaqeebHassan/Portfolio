import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isVisible, setisVisible] = useState(false);
  return (
    <div className="navbar-container fixed w-full z-50">
      {/* Mobile Navbar */}
      <div
        className="mobile-nav md:hidden flex justify-between items-center p-2  text-white shadow-black "
        style={{ backgroundColor: "#10131a" }}
      >
        <div className="mobile-logo">
          <strong className="text-xl">Saqeeb Hassan</strong>
        </div>
        <Hamburger onToggle={() => setisVisible(!isVisible)} size={20} />
      </div>
      {/* End of Mobile Navbar */}
      {/* Desktop Navbar */}
      <div
        className={`navbar md:flex justify-between items-center ${
          isVisible ? "block" : "hidden"
        } px-3 py-2  md:static absolute md:rounded-none rounded-lg shadow-sm shadow-black`}
        style={{ backgroundColor: "#10131a" }}
      >
        <div className="nav-left">
          <div className="logo">
            <span className="text-2xl text-white font-bold">Saqeeb Hassan</span>
          </div>
        </div>
        <div className="nav-right block md:flex gap-4">
          <div className="nav-links">
            <ul className="block md:flex gap-3">
              <li className="my-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `
                  block font-bold text-md
                  ${isActive ? "text-cyan-500" : "text-white"}
                  `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `
                  block font-bold text-md
                  ${isActive ? "text-cyan-500" : "text-white"}
                  `
                  }
                >
                  About me
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/Projects"
                  className={({ isActive }) =>
                    `
                  block font-bold text-md
                  ${isActive ? "text-cyan-500" : "text-white"}
                  `
                  }
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
          <li className="contact-me my-4 md:m-2 hover:scale-105 duration-100">
            <NavLink
              to="ContactForm"
              className={`
              text-md font-bold
              bg-cyan-500 rounded-md md:rounded-3xl py-2 px-3
              `}
            >
              Contact me
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
