
import { Dropdown } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import { OfferData } from "../../../assets/Data/Data";
import Scrollbar from "smooth-scrollbar";
import "./Offer.css";
import { useEffect } from "react";

const Offer = () => {
  useEffect(() => {
    const offerScrollbar = Scrollbar.init(
      document.querySelector(".Cust-offer")
    );

    return () => {
      if (offerScrollbar) offerScrollbar.destroy();
    };
  }, []);
  return (
    <div className="Cust-offer ms-2 ">
      <div className=" row d-flex mt-3  ms-3  sm-device-block ">
        <div className="col-5">
          <h3 className="pb-0 fs-5 fw-bold  amazing-title ms-md-0">Amazing Offers</h3>
        </div>

        <div className="col-md-2 col-5 ms-5 me-md-0 dropdown-custm">
          <Dropdown >
            <Dropdown.Toggle id="adminDropdown" className="amazon-mall-btn">
              <span>Amazon Mall &nbsp;&nbsp;</span>
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" className="custom-dropdown-menu ">
              <Dropdown.Item href="/">Amazon Mall</Dropdown.Item>
              <Dropdown.Item href="/">Golf floras</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/">Bobylon</Dropdown.Item>
              <Dropdown.Item href="/">Imarat Builders Mall</Dropdown.Item>
              <Dropdown.Item href="/">Mall of Imarat</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="row ms-4 ms-md-0 offer-div">
        {OfferData.map((mall) => (
          <div key={mall.id} className="col-md-10">
            <div className="d-flex align-items-center mb-1 mt-3 text-white justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={mall.image}
                  alt={mall.mallName}
                  className="me-3 me-md-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div className="ms-2">
                  <h6 className="mb-1">{mall.mallName}</h6>
                  <h6 className="text-muted mb-0">{mall.percentage}%</h6>
                </div>
              </div>
              <a
                className="text-white fs-3 "
                href="/" 
              >
                <MdOutlineFileDownload  className="download-icon"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
