
/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import './card.css'

const renderCardColumn = (data) => (
  <Col xs={12} md={6} className="d-flex">
    <div className="child-bg Card flex-fill mb-1 ">
      {data.map((item, index) => (
        <div key={index} className="col-12">
          <div className="d-flex justify-content-between bg-color rounded  sm-device-card">
            <div className="d-flex flex-column text-black ms-3 mt-3">
              <h6 className="fs-5 mb-0 fontsize-ipad">{item.title}</h6>
              <span className="fw-bold fs-4 textcolor">{item.value}</span>
            </div>

      
            {item.imageSrc && (
              <div className="d-none d-md-block ">
              <img src={item.imageSrc} alt="Graph" className="image-rs mt-2" />
            </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </Col>
);


const Cards = ({ data }) => {
  return (
    <>
      {renderCardColumn(data.slice(0, 1))} 
      {renderCardColumn(data.slice(1, 2))}
    </>
  );
};

export default Cards;




