import { FaFileSignature } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import './InvestmentInfoProfile.css';

const Investinfo = [
  { label: "Registration with FBR ", value: "Brother", icon: <FaFileSignature/>  },
  { label: "Nationality Pakistani", value: "Danish ahmed" , icon: <FaIdCard />  },
  { label: "Source of Income", value: "Bussiness" , icon: <FaHandHoldingDollar/>  },
  { label: "Source of Funds", value: "danish123@gmail.com" , icon: <FaDocker/>  },
  { label: "Existing Client", value: "danish123@gmail.com" , icon: <ImProfile /> },
];

const InvestmentInfoProfile = () => {
  return (
    <div>
      <div className=" mt-3">
        <h6 className="fs-5 fw-bold">Invest Information</h6>
      </div>

      <div>
      <div className="text-white  mt-4 p-2 bok-info  invesment-border rounded">
        {Investinfo.map((info, index) => (
          <div className="d-flex mb-3 ms-2" key={index}>
            <div className="fs-5  m-1 rounded">
              <div className="bg-sec p-1 rounded">{info.icon} </div>
            </div>
            <div className="ms-2">
              <h6>{info.label}</h6>
              <span>{info.value}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default InvestmentInfoProfile;
