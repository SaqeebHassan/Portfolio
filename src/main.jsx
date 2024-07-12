import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Projects from "./components/custom/Projects.jsx";
import ContactForm from "./components/custom/ContactForm.jsx";
import About from "./components/custom/About.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="ContactForm" element={<ContactForm />} />
      <Route path="About" element={<About />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
