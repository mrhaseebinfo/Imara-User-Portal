import { images } from "../../../assets/Data/Data";
import "./HoteDeals.css";

const HotDeals = () => {
  const events = [
    images.Hotevent1,
    images.Hotevent2,
    images.Hotevent3,
    images.Hotevent4,
  ];

  return (
    <div className="upcoming-div flex-fill">
      <div className="col d-flex justify-content-between mt-3 ">
        <h6 className="fs-5 ms-2">Upcoming Events</h6>
        <div className="col-auto">
          <a href="/">
            <span className="view-all list-style-none me-4">View all</span>
          </a>
        </div>
      </div>

      <div className="d-flex d-flexs flex-wrap justify-content-center event-img-div mb-4">
        {events
          .concat(events)
          .slice(0, 8)
          .map((event, index) => (
            <div key={index} className="upcoming-img">
              <img
                src={event}
                alt={`Upcoming Event ${index + 1}`}
                className="mx-auto d-block imges-event"
                
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HotDeals;
