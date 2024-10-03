import "./EditProfile.css";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CustomInput from "./CustomInput";
import Scrollbar from "smooth-scrollbar";
import { images } from "../../../assets/Data/Data";

const checkboxes = [
  "Salaried",
  "Business",
  "Foreign Source",
  "Property",
  "Other",
];

const checkboxesfunds = [
  "Form Loan",
  "Business Income",
  "Saving",
  "Other To Be Specified",
];

const EditProfile = () => {
  const [isVisibleP, setIsVisibleP] = useState(true);
  const [isVisibleB, setIsVisibleB] = useState(true);
  const [isVisibleI, setIsVisibleI] = useState(true);
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (e) => {
    setFileSelected(e.target.files.length > 0);
  };

  // Toggle sections
  const toggleVisibility = (setter) => {
    setter((prevState) => !prevState);
  };

  useEffect(() => {
    const editscroll = Scrollbar.init(document.querySelector(".edit-scroll"));
    return () => {
      if (editscroll) editscroll.destroy();
    };
  }, []);

  // Upload image logic
  const fileInputRef = useRef(null);
  const handleButtonClick = () => fileInputRef.current.click();

  return (
    <div className="edit-scroll container-fluid mt-3 mb-5">
      <div className="editprofile mx-auto">
        <h6 className="fs-4 fw-bold mb-4">Edit Profile</h6>

        {/* Profile Picture */}
        <div className="mb-5">
          <h6 className="fw-bold">Profile Picture</h6>
          <div className="d-flex mt-3 p-3 border-profile  rounded align-items-center">
            <img
              src={images.avatar}
              alt="Profile"
              className="rounded-circle"
              style={{ height: "70px", width: "70px" }}
            />
            <div className="ms-3">
              <button className="edit-btn btn" onClick={handleButtonClick}>
                Upload New Image
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <p className="mt-3">At least 830x800 px recommended</p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="fw-bold">Personal Information</h6>
            <button
              className="btn btn-edit-pro"
              onClick={() => toggleVisibility(setIsVisibleP)}
            >
              {isVisibleP ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
          {isVisibleP && (
            <div className="mt-3">
              <div className="row g-3">
                <CustomInput id="firstname" placeholder="First Name" />
                <CustomInput id="lastname" placeholder="Last Name" />
                <CustomInput id="emailprimary" placeholder="Email Primary" />
                <CustomInput
                  id="emailsecondary"
                  placeholder="Email Secondary"
                />
                <CustomInput id="phonenumber" placeholder="Phone Number" />
                <CustomInput
                  id="phonesecondary"
                  placeholder="Secondary Number"
                />
                <CustomInput
                  id="primaryaddress"
                  placeholder="Primary Address"
                />
                <CustomInput
                  id="secondaryaddress"
                  placeholder="Secondary Address"
                />

                <div className="col-md-6">
                  <label className="form-label">CNIC Front</label>
                  <div className="cnic-div p-2 d-flex">
                    <label
                      htmlFor="fileUploadFront"
                      className="custom-edit-upload"
                    >
                      {fileSelected ? "File Selected" : "Choose File"}
                    </label>
                    <div className="d-flex">
                      <input
                        type="file"
                        id="fileUploadFront"
                        onChange={handleFileChange}
                        className="file-input"
                      />
                      <span className="mt-2 ms-1 no-file">no file chosen</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 ">
                  <label className="form-label">CNIC Back</label>
                  <div className="cnic-div p-2 d-flex">
                    <label
                      htmlFor="fileUploadFront"
                      className="custom-edit-upload"
                    >
                      {fileSelected ? "File Selected" : "Choose File"}
                    </label>
                    <div className="d-flex">
                      <input
                        type="file"
                        id="fileUploadFront"
                        onChange={handleFileChange}
                        className="file-input"
                      />
                      <span className="mt-2 ms-1 no-file">no file chosen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bank Information */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="fw-bold">Bank Information</h6>
            <button
              className="btn btn-edit-pro"
              onClick={() => toggleVisibility(setIsVisibleB)}
            >
              {isVisibleB ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
          {isVisibleB && (
            <div className="mt-3">
              <div className="row g-3">
                <CustomInput id="bankname" placeholder="Bank Name" />
                <CustomInput id="ibannumber" placeholder="IBAN" />
                <CustomInput id="accountnumber" placeholder="Account Number" />
                <CustomInput id="accounttitle" placeholder="Account Title" />
              </div>
            </div>
          )}
        </div>

        {/* Investor Information */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="fw-bold">Investor Information</h6>
            <button
              className="btn btn-edit-pro"
              onClick={() => toggleVisibility(setIsVisibleI)}
            >
              {isVisibleI ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
          {isVisibleI && (
            <div className="mt-3">
              <div className="row g-3">
                <CustomInput
                  id="existingClient"
                  placeholder="Existing Client Info"
                />
                <CustomInput
                  id="otherclientInfo"
                  placeholder="Other Client Info"
                />
              </div>

              {/* Source of Income */}
              <div className="mt-4">
                <h6 className="fw-bold">Source of Income</h6>
                <div className="d-flex flex-wrap gap-4 mb-3">
                  {checkboxes.map((label, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`incomeCheck${label}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`incomeCheck${label}`}
                      >
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
                <CustomInput
                  id="othersource"
                  placeholder="Other Source of Income"
                  className="mt-5"
                />
              </div>

              {/* Source of Funds */}
              <div className="mt-4">
                <h6 className="fw-bold">Source of Funds</h6>
                <div className="d-flex flex-wrap gap-4">
                  {checkboxesfunds.map((label, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`fundsCheck${label}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`fundsCheck${label}`}
                      >
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="d-flex gap-2 gap-md-3 mt-4 justify-content-center justify-content-md-end">
          <button className="btn-save btn">Save</button>
          <button className="btn-cancel btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
