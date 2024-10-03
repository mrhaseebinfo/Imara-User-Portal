import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/Data/Data";
import { FaPen } from "react-icons/fa6";
import PersonalInfoProfile from "./PersonalInfo/PersonalInfoProfile";
import BookingInfoProfile from "./BookingInfoProfile/BookingInfoProfle";
import InvestmentInfoProfile from "./InvestmentInfoProfile/InvestmentInfoProfile";
const Profile = () => {
  const [currentSection, setCurrentSection] = useState("Booking Information");

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="container profile-div child-bg mt-3">
      <div className="row mb-2">
        <div className="col-12">
          <h6 className="fs-4 text-black ">Profile</h6>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center mt-3 mb-2 border-profile ">
          <div className="d-flex align-items-center">
            <img
              src={images.avatar}
              alt="avatar"
              className="rounded-circle"
              style={{ width: "60px", height: "60px" }}
            />
            <div className="ms-3">
              <h6 className="fs-5 fw-bold">Etisham Malik</h6>
              <span className="fs-6">etishamalikgrana.com</span>
            </div>
          </div>
          <Link to="/layout/editprofile">
            <button type="button" className="btn btn-outline-light Edit-btn me-3">
              <FaPen/> &nbsp;
              Edit
            </button>
          </Link>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-md-6 nav-b">
          <ul className="nav gap-5">
            <li className="nav-item">
              <a
                className={`nav-linkP ${
                  currentSection === "Personal Details" ? "active" : ""
                }`}
                onClick={() => handleSectionChange("Personal Details")}
                href="#!"
              >
                Personal Details
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-linkP ${
                  currentSection === "Booking Information" ? "active" : ""
                }`}
                onClick={() => handleSectionChange("Booking Information")}
                href="#!"
              >
                Booking Information
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-linkP ${
                  currentSection === "Investment Information" ? "active" : ""
                }`}
                onClick={() => handleSectionChange("Investment Information")}
                href="#!"
              >
                Investment Information
              </a>
            </li>
          </ul>
        </div>
      </div>

     
      <div className="row mt-3">
        <div className="col-12">
          {currentSection === "Personal Details" && (
            <div className="rounded p-3"> <PersonalInfoProfile/> </div>
          )}

          {currentSection === "Booking Information" && (
            <div className="rounded p-3 "><BookingInfoProfile/></div>
          )}

          {currentSection === "Investment Information" && (
            <div className="rounded p-3"><InvestmentInfoProfile/></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
