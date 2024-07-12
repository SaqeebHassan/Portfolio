import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer-container flex justify-center text-white py-8"
      style={{ backgroundColor: "#10131a" }}
    >
      <div className="footer w-10/12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Saqeeb Hassan</h1>
            <p className="mt-2">48-A Civil Lines Jauharabad</p>
            <p className="mt-2">Email: saqeebhassan935@gmail.com</p>
            <p className="mt-2">Phone: 0306-4857953</p>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="https://facebook.com"
              className="hover:text-blue-500 duration-100"
            >
              <FaFacebookF size={24} />
            </NavLink>
            <NavLink
              to="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400 duration-100"
            >
              <FaTwitter size={24} />
            </NavLink>
            <NavLink
              to="https://instagram.com"
              target="_blank"
              className="hover:text-pink-600 duration-100"
            >
              <FaInstagram size={24} />
            </NavLink>
            <NavLink
              to="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-700 duration-100"
            >
              <FaLinkedinIn size={24} />
            </NavLink>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>© 2024 Saqeeb Hassan</p>
          <div className="flex justify-center space-x-4 mt-4">
            <NavLink to="/" className="hover:underline">
              Privacy Policy
            </NavLink>
            <NavLink to="/" className="hover:underline">
              Terms of Service
            </NavLink>
            <NavLink to="/ContactForm" className="hover:underline">
              Contact me
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
