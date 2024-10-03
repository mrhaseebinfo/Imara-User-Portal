import { Row, Col, Card } from 'react-bootstrap';
import './ResponsiveCard.css';
import { images } from '../../../assets/Data/Data';

const ResponsiveCards = () => {
  return (
    <Row className="container card-sm-d"> {/* Add gap utility here */}
      <Col xs={12} md={4}>
        <Card className="event-cards">
          <div className="d-flex align-items-center child-bg rounded p-3 mb-1  ">
            <div className="d-flex flex-column text-black">
              <span className="fw-bold fs-3 ms-1 textcolor">8</span>
              <h6 className="fs-6 mb-0 ms-1 title">Total Upcoming Events</h6>
            </div>
            <div className="ms-auto">
              <img
                src={images.Eventicon2}
                alt="Total Upcoming Events"
                className="img-fluid"
              />
            </div>
          </div>
        </Card>
      </Col>

      <Col xs={12} md={4}>
        <Card className="event-cards">
          <div className="d-flex align-items-center  child-bg  rounded p-3 mb-1">
            <div className="d-flex flex-column text-black">
              <span className="fw-bold fs-3 ms-1 textcolor">15</span>
              <h6 className="fs-6 mb-0 ms-1 title">Attended Events</h6>
            </div>
            <div className="ms-auto">
              <img
                src={images.Eventicon1}
                alt="Attended Events"
                className="img-fluid"
              />
            </div>
          </div>
        </Card>
      </Col>

      <Col xs={12} md={4}>
        <Card className="event-cards">
          <div className="d-flex align-items-center  child-bg  rounded p-3 mb-1">
            <div className="d-flex flex-column text-black">
              <span className="fw-bold fs-3 ms-1 textcolor">50</span>
              <h6 className="fs-6 mb-0 ms-1 title">Rejected Events</h6>
            </div>
            <div className="ms-auto">
              <img
                src={images.Eventicon3}
                alt="Rejected Events"
                className="img-fluid"
              />
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ResponsiveCards;
