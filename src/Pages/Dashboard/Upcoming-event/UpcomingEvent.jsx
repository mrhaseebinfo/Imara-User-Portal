/* eslint-disable react/prop-types */
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { images } from "../../../assets/Data/Data";
import "./UpcomingEvent.css";

const ImageItem = ({ src, alt }) => (
  <div className="col-12 col-md-auto mb-2 d-flex justify-content-center">
    <img src={src} alt={alt} style={{ width: "270px", height: "380px" }} />
  </div>
);

const UpcomingEvent = () => {
  const eventImages = [
    { src: images.Event1, alt: "Event1" },
    { src: images.Event2, alt: "Event2" },
    { src: images.Event3, alt: "Event3" },
    { src: images.Event4, alt: "Event4" },
  ];

  return (
    <div className="row bg-color rounded mt-4 ms-3 d-flex flex-wrap justify-content-center">
      <div className="row d-flex mb-0 justify-content-between">
        <div className="d-flex col-md-12 justify-content-between">
          <h6 className="fs-5 text-white mt-3">Upcoming Event & Hot Deals</h6>
          <div className="col-1 fs-2 me-4 mt-2 d-flex justify-content-between">
            <MdOutlineKeyboardArrowLeft className="Arrow-btn" />
            <MdOutlineKeyboardArrowRight className="Arrow-btn" />
          </div>
        </div>
      </div>
      <div className="col-12 ms-2 mt-0 mb-1 event-btns">
        <button
          type="button"
          className="btn btn-outline-secondary custom-button me-3"
        >
          Events
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary custom-button"
        >
          Hot Deals
        </button>
      </div>

      <div className="row d-flex flex-wrap justify-content-center">
        {eventImages.map((image, index) => (
          <ImageItem key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
