/* eslint-disable react/prop-types */
import "./ImaratProject.css";
import { Link } from "react-router-dom";
import { projects } from "../../../assets/Data/Data";

const ImaratProject = () => {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <div
          className="project-card"
          key={project.id}
          style={{
            position: "relative",
          }}
        >
          <img
            src={project.imgSrc}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            alt={project.name}
          />
          <Link to={`/layout/investment/${project.id}`}>
            <div
              className="gradient-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.93%, rgba(0, 0, 0, 0.8) 82.46%)",
              }}
            ></div>

            <div
              className="position-absolute"
              style={{
                bottom: "10px",
                left: "10px",
                color: "#fff",
                zIndex: 1,
              }}
            >
              <h6>{project.name}</h6>
              <p>{project.size}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImaratProject;
