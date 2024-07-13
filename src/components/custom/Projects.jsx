import { NavLink } from "react-router-dom";
import Slider from "../cards/Slider";

function Projects() {
  const media = [
    "https://res.cloudinary.com/dwbt979k3/image/upload/v1720507885/portfolio/project-images/mzvlsht2xz5ynjfbu68z.png",
    "https://res.cloudinary.com/dwbt979k3/image/upload/v1720508225/portfolio/project-images/rqgmuayd2re8cltfjm69.png",
    "https://res.cloudinary.com/dwbt979k3/video/upload/v1720619122/portfolio/project-images/qpjxepiqx29dsuaqkkv0.mp4",
  ];
  const mobileListing = [
    "https://res.cloudinary.com/dwbt979k3/image/upload/v1720502580/portfolio/project-images/aqroed3if7clrc1icq2e.png",
    "https://res.cloudinary.com/dwbt979k3/image/upload/v1720502581/portfolio/project-images/rsloepwbsf8tst3g8bqz.png",
    "https://res.cloudinary.com/dwbt979k3/video/upload/v1720507823/portfolio/project-images/n8g6j1fzjubrodemswtw.mp4",
  ];
  return (
    <>
      <div
        className="project-container flex flex-col items-center text-gray-200"
        style={{ backgroundColor: "rgb(10, 30, 43)" }}
      >
        <div className="cv-poster w-10/12 flex flex-col justify-center my-6">
          <div className="project-detail">
            <strong className="text-2xl">
              Online Custom CV and Poster Designer
            </strong>
            <p className="text-justify my-4">
              It is my Academic Final Year project. This website allow
              individuals to create personalized and visually appealing CVs and
              Posters. Users can choose pre designed cv or poster templates and
              edit according to their requirements.
              <span className="text-blue-400 font-bold text-end">
                <li>
                  <NavLink
                    to="https://github.com/SaqeebHassan/Online-CV-Maker"
                    target="_blank"
                  >
                    Link
                  </NavLink>
                </li>
              </span>
            </p>
          </div>
          <div className="project-view">
            <Slider media={media} />
          </div>
          <div className="technology-used mt-2">
            <strong className="text-xl">Technology Used</strong>
            <div className="flexs flex-wrap my-2">
              <button className="bg-cyan-500 py-1 px-3 rounded-sm me-1">
                PHP
              </button>
              <button className="bg-cyan-500 py-1 px-3 rounded-sm me-1">
                JavaScript
              </button>
              <button className="bg-cyan-500 py-1 px-3 rounded-sm me-1">
                D3 Js
              </button>
              <button className="bg-cyan-500 py-1 px-3 rounded-sm my-1">
                HTML/CSS
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-listing w-10/12 flex flex-col justify-center">
          <div className="project-detail">
            <strong className="text-2xl">
              Mobile Specs and Price Listing App
            </strong>
            <p className="text-justify my-4">
              It is practice project. This website is technically a frontend
              project that takes mobiles data from API and display on web page.
              The project is Build with React Js. The mobile data API is Build
              with Express Js.
              <span className="text-blue-400 font-bold text-end">
                <li>
                  <NavLink
                    to="https://github.com/SaqeebHassan/MobileSpecsApp"
                    target="_blank"
                  >
                    Link
                  </NavLink>
                </li>
              </span>
            </p>
          </div>
          <div className="project-view">
            <Slider media={mobileListing} />
          </div>
          <div className="technology-used mt-4">
            <strong className="text-xl">Technology Used</strong>
            <div className="flexs flex-wrap my-2">
              <button className="bg-cyan-500 py-1 px-3 rounded-sm me-1">
                React Js
              </button>
              <button className="bg-cyan-500 py-1 px-3 rounded-sm me-1">
                React Redux
              </button>
              <button className="bg-cyan-500 py-1 px-3 rounded-sm me-1">
                Context API
              </button>
              <button className="bg-cyan-500 py-1 px-3 my-1 rounded-sm">
                React Router DOM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
