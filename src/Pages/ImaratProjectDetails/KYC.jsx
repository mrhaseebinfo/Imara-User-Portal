/* eslint-disable react/prop-types */
import "./KYC.css";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import {kycData} from "../../assets/Data/Data.js";
import { useParams } from "react-router-dom";

const KYC = () => {
  useEffect(() => {
    const mainScrollbar = Scrollbar.init(
      document.querySelector(".scroll-imformation")
    );

    return () => {
      if (mainScrollbar) mainScrollbar.destroy();
    };
  }, []);

  const { projectId } = useParams();

  const KycData = kycData[projectId];

  if (!KycData) {
    return <div>Project not found</div>;
  }

  return (
    <div className="KYC rounded scroll-imformation">
      <h6 className="fs-5 fw-bold p-3 ms-2">Know Your Customer</h6>
      <div className="profile">
        <div className="row d-flex">
          <div className="col-4 ps-4 d-flex gap-5">
            <img src={KycData.avatarImage} alt={KycData.name} />
            <div className="mt-3">
              <h6 className="fs-4 fw-bold">{KycData.name}</h6>
              <span className="fs-6">{KycData.email}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 ms-1 scroll-imformation  ">
          <h6 className="fw-bold fs-5">Personal Information</h6>
          <div className="col-6 d-flex">
            <div className="margin-l col-6 text-white">
              <h6>Phone</h6>
              <h6>CNIC</h6>
              <h6>Secondary Phone</h6>
              <h6>Primary Address</h6>
              <h6>Secondary Address</h6>
              <h6>CNIC Front</h6>
            </div>

            <div className="margin-r col-6 text-white ms-5">
              <h6>{KycData.phone}</h6>
              <h6>{KycData.cnic}</h6>
              <h6>{KycData.secondaryPhone}</h6>
              <h6>{KycData.primaryAddress}</h6>
              <h6>{KycData.secondaryAddress}</h6>
              <img src={KycData.cnicFrontImage} alt="cnic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYC;
