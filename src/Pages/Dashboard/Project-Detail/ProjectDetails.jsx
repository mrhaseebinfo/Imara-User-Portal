import { FaArrowRight } from "react-icons/fa";
import { projectData } from "../../../assets/Data/Data.js";
import Scrollbar from "smooth-scrollbar";
import "./ProjectDetails.css";
import { useEffect } from "react";

const ProjectDetails = () => {
  useEffect(() => {
    const projectScrollbar = Scrollbar.init(
      document.querySelector(".projectsdetail-div")
    );

    return () => {
      if (projectScrollbar) projectScrollbar.destroy();
    };
  }, []);

  return (
    <div className="ms-2 mt-3 " style={{ overflowX: 'auto' }}>
      <div className="table-responsive projectsdetail-div">
        <table className="" style={{ width: '100%' }}>
          <thead>
            <tr className="text-start text-color mb-1">
              <th style={{ width: '42%' }}>PROJECT</th>
              <th style={{ width: '28%' }}>CITY</th>
              <th style={{ width: '20%' }}>BUILD ON</th>
              <th style={{ width: '10%' }}>VIEW</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project) => (
              <tr key={project.id} className="align-middle">
                <td className="d-flex align-items-center text-white mb-3">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="project-image me-2"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <span
                    className="text-truncate"
                    data-bs-toggle="tooltip"
                    title={project.projectName}
                  >
                    {project.projectName}
                  </span>
                </td>
                <td className="text-start text-white">{project.city}</td>
                <td className="text-start text-white">{project.buildYear}</td>
                <td className="text-start text-white">
                  <button
                    className="arrow-btn"
                    onClick={() => (window.location.href = project.buttonLink)}
                  >
                    <FaArrowRight />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectDetails;
