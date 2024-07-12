import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function ProjectCard({ title, src }) {
  return (
    <div
      className="rounded-md p-1 w-2/3 md:w-auto"
      style={{ backgroundColor: "#142835" }}
    >
      <img src={src} alt="" className="project-img object-contain rounded-md" />
      <div className="project-title mt-2 mx-1 ">{title}</div>
      <NavLink
        to="/Projects"
        className={`text-blue-400 text-sm font-bold mx-1`}
      >
        View Project
      </NavLink>
      <NavLink
        to="https://github.com/SaqeebHassan?tab=repositories"
        target="_blank"
        className={`flex items-center justify-center gap-2 py-1 px-4 mx-1 my-1 bg-cyan-700 rounded-sm`}
      >
        <BsGithub size={18} />
        View Code
      </NavLink>
    </div>
  );
}

export default ProjectCard;
