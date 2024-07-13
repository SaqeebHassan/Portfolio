import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "../cards/ProjectCard";
import SkillsCard from "../cards/SkillsCard";
import axios from "axios";
import Shimmer from "../custom/Shimmer";
import "./style.css";
import { BiDownload, BiLogoLinkedin } from "react-icons/bi";
import { BsBootstrap, BsGithub } from "react-icons/bs";
import {
  SiExpress,
  SiGmail,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaFacebook, FaReact } from "react-icons/fa6";
import { DiJavascript, DiNodejs } from "react-icons/di";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed
  }, []);

  // Download CV from Cloudinary to Local Storage
  const cloudinaryUrl =
    "https://res.cloudinary.com/dwbt979k3/image/upload/v1720330832/portfolio/q90nhdtmzfesa1wln9nu.jpg";

  const downloadFile = async () => {
    try {
      const response = await axios({
        url: cloudinaryUrl,
        method: "GET",
        responseType: "blob", // important
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Saqeeb Hassan(MERN).jpg"); // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file", error);
    }
  };

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <>
      <div
        className="about-container flex flex-col justify-center"
        style={{ backgroundColor: "#0a1e2b" }}
      >
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="about-me w-10/12 md:w-2/5 my-3 text-gray-200">
            <strong className="text-2xl font-bold">
              <span>Saqeeb </span>
              <span className="text-cyan-500">Hassan</span>
            </strong>
            <p className="text-justify">
              Full stack developer proficient in MongoDB, Express js, React js
              and Node js.
            </p>
          </div>
          <div className="profile flex justify-end w-10/12 md:w-2/5">
            <div className="contact-circle flex justify-end">
              <div className="profile-image">
                <img
                  src="https://res.cloudinary.com/dwbt979k3/image/upload/v1720619564/portfolio/project-images/xpptjh7nf7mnviggvwdp.png"
                  alt=""
                  width={160}
                />
              </div>
              <div className="contact-image">
                <li className="linkedin">
                  <NavLink
                    to="https://www.linkedin.com/in/saqeeb-hassan-758844202/"
                    target="_blank"
                  >
                    <BiLogoLinkedin
                      size={30}
                      className="bg-white p-1 rounded-full"
                    />
                  </NavLink>
                </li>
                <li className="github">
                  <NavLink
                    to="https://github.com/SaqeebHassan?tab=repositories"
                    target="_blank"
                  >
                    <BsGithub size={30} className="bg-white rounded-full p-1" />
                  </NavLink>
                </li>

                <li className="gmail">
                  <NavLink to="https://google.com" target="_blank">
                    <SiGmail size={30} className="bg-white p-1 rounded-full" />
                  </NavLink>
                </li>
                <li className="facebook">
                  <NavLink
                    to="https://web.facebook.com/ali.uh.14"
                    target="_blank"
                  >
                    <FaFacebook
                      size={30}
                      className="bg-white p-1 rounded-full"
                    />
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="my-cv w-11/12 flex justify-end mt-4">
          <div className="cv-btn" onClick={downloadFile}>
            <BiDownload size={45} className="invert cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        className="skills-container flex flex-col items-center text-gray-200 -my-1"
        style={{ backgroundColor: "#0a1e2b" }}
      >
        <div className="about w-4/5">
          <div className="about-detail w-full md:w-5/12">
            <strong className="text-2xl">About me</strong>
            <p>
              My name is Saqeeb Hassan. I am full stack web Developer. I am
              proficient in Front end as well as in Backend.
            </p>
            <NavLink to="/About" className={`text-blue-400`}>
              Read more
            </NavLink>
          </div>
        </div>
        <strong className="text-3xl font-bold">My Skills</strong>
        <div className="skills w-4/5 flex flex-col items-end">
          <div className="skill-items flex justify-center flex-wrap">
            <SkillsCard src={<SiMongodb size={80} color="#0fa54d" />} />
            <SkillsCard src={<SiExpress size={80} color="#000" />} />
            <SkillsCard src={<FaReact size={80} color="#00d1f7" />} />
            <SkillsCard src={<DiNodejs size={80} color="#88c249" />} />
          </div>
          <div className="skill-items flex justify-center flex-wrap">
            <SkillsCard src={<DiJavascript size={80} color="#efd81d" />} />
            <SkillsCard src={<SiRedux size={80} color="#7348b5" />} />
            <SkillsCard src={<SiTailwindcss size={80} color="#15b8c5" />} />
            <SkillsCard src={<BsBootstrap size={80} color="#7010ef" />} />
          </div>
        </div>
      </div>
      <div
        className="project-container flex flex-col items-center text-gray-200"
        style={{ backgroundColor: "#0a1e2b" }}
      >
        <strong className="text-3xl mt-6">My Projects</strong>
        <div className="project-card w-10/12 flex flex-col md:flex-row justify-center items-center gap-3 my-4">
          <ProjectCard
            title="Online custotm CV and Poster Designer"
            src={
              "https://res.cloudinary.com/dwbt979k3/image/upload/v1720507885/portfolio/project-images/mzvlsht2xz5ynjfbu68z.png"
            }
          />
          <ProjectCard
            title="Mobile Price and Specs listing App"
            src={
              "https://res.cloudinary.com/dwbt979k3/image/upload/v1720502580/portfolio/project-images/aqroed3if7clrc1icq2e.png"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Home;
