
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt, FaAddressCard, FaRegIdCard } from "react-icons/fa";
import './PersonalInfoProfle.css';
import { images } from "../../../assets/Data/Data";

const personalInfo = [
  { label: "Email", value: "etisham@gmail.com", icon: <MdOutlineMailOutline /> },
  { label: "CNIC", value: "13101-098351-3", icon: <FaRegIdCard /> },
  { label: "Phone", value: "03129393912", icon: <FaPhoneAlt /> },
  { label: "Secondary Phone", value: "03129393912", icon: <FaPhoneAlt /> },
  { label: "Primary Address", value: "House # 123 Street # 12 Block A Islamabad", icon: <FaAddressCard /> },
  { label: "CNIC Front", value: <img src={images.CnicFram} alt="CNIC Front" />, icon: <FaRegIdCard /> },
  { label: "CNIC Back", value: <img src={images.CnicFram} alt="CNIC Back" />, icon: <FaRegIdCard /> }
];

const PersonalInfoProfile = () => {

  return (
    <div className="">
      <h6 className="fs-6 fw-bold pb-3">Personal Information</h6>

      <div className="ps-3 pt-2 border-all rounded">
        <div className="col">
          {personalInfo.map((info, index) => (
            <div className="col-12 col-md-6 mb-3 " key={index}>
              <div className="d-flex align-items-center pb-4">
                <div className="fs-5 m-1 rounded ">
                  <div className="bg-sec p-2 rounded ">
                    {info.icon}
                  </div>
                </div>
                <div className="ms-2 ">
                  <h6 className="fw-bold">{info.label}</h6>
                  <span>{info.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoProfile;
