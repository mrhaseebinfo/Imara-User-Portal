import { useState } from "react";
import { useParams } from "react-router-dom";
import Bookinginfo from "./BookingInfo.jsx";
import { projectData } from '../../assets/Data/Data.js';
import './ImaratProjectDetails.css';
import PaymentHistory from "./PaymentHsitory.jsx";
import KYC from "./KYC.jsx";

const ImaratProjectDetails = () => {
  const { projectId } = useParams();
  const [currentSection, setCurrentSection] = useState("Booking Information");

  // Find the project corresponding to the projectId
  const currentProject = projectData.find(project => project.id === parseInt(projectId));

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="project-detail-page mt-2">
      <div className="breadcrumbs">
        <span className="breadcrumb-text">
          My Investment &gt; {currentProject ? currentProject.projectName : "Project Not Found"}
        </span>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <div className={`tab ${currentSection === "Booking Information" ? "active" : ""}`} onClick={() => handleSectionChange("Booking Information")}>
            <span className={`tab-text ${currentSection === "Booking Information" ? "active" : ""}`}>Booking Information</span>
          </div>
          <div className={`tab ${currentSection === "Payment History" ? "active" : ""}`} onClick={() => handleSectionChange("Payment History")}>
            <span className={`tab-text ${currentSection === "Booking Information" ? "active" : ""}`}>Payment History</span>
          </div>
          <div className={`tab ${currentSection === "KYC" ? "active" : ""}`} onClick={() => handleSectionChange("KYC")}>
            <span className={`tab-text ${currentSection === "Booking Information" ? "active" : ""}`}>KYC</span>
          </div>
        </div>
      </div>

      {currentSection === "Booking Information" && (
        <div className="section-content child-bg">
          <Bookinginfo />
        </div>
      )}

      {currentSection === "Payment History" && (
        <div className="section-content">
          <PaymentHistory/>    
        </div>
      )}

      {currentSection === "KYC" && (
        <div className="section-content">
          <KYC/>
        </div>
      )}
    </div>
  );
};

export default ImaratProjectDetails;
