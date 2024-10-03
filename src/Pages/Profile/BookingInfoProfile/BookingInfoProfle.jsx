import { CiBank } from "react-icons/ci";
import { LuBanknote } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaIdCard } from "react-icons/fa6";
import './BookingInfoProfile.css'

const bookinginfo = [
  { label: "BanK Name", value: "National Bank", icon: <CiBank /> },
  { label: "IBAN", value: "023123102321" , icon: <LuBanknote  /> },
  { label: "Account Number", value: "002323423894223" , icon: <MdOutlineManageAccounts />},
  { label: "Account Title", value: "Etisham Malik" , icon: <FaIdCard /> },
];
const BookingInfoProfile = () => {
  return (
    <div className="">
      <div className="mt-3">
        <h6 className="fs-5 fw-bold">Booking Information</h6>
      </div>

      <div className=" mt-4 pt-3 pb-3 booking-border rounded">
        {bookinginfo.map((info, index) => (
          <div className="d-flex mb-3 ms-2" key={index}>
            <div className="fs-5  m-1 rounded">
              <div className="bg-sec p-1 rounded">{info.icon} </div>
            </div>
            <div className="ms-2">
              <h6 className="fw-bold">{info.label}</h6>
              <span>{info.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingInfoProfile;
