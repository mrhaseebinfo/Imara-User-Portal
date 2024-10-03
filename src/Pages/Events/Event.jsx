import { Container, Row, Col } from "react-bootstrap";
import ResponsiveCards from "./ResponsiveCard.jsx/ResponsiveCard";
import './Event.css';
import HotDeals from "./HotDealsEvents.jsx/HotDeals";
import MyCustomCalendar from "./Calander.jsx/MyCustomCalander";


const Events = () => {
  return (
    <Container fluid className="mt-3 event-custom">
      {/* Greeting Section */}
      <Row className="mb-3">
        <Col xs={12} className="heading-sm">
          <h2 className="fs-4 text-white fw-normal">
            Upcoming Events & Schedule
          </h2>
        </Col>
      </Row>
      
      <Row>
        <ResponsiveCards />
      </Row>
      
      <Row className="flex-grow-1 mt-2">
        <Col xs={12} className="d-flex flex-column flex-md-row gap-1">
          {/* Calendar appears first on mobile */}
          <Col xs={12} md={4} className="d-flex order-md-2">
            <div className="child-bg flex-fill rounded calendar mb-1 me-4  sm-calander calendar-child  "> <MyCustomCalendar/></div>
          </Col>

          <Col xs={12} md={8} className="d-flex flex-column order-md-1">
            <Col xs={12} className="child-bg event-div flex-fill rounded">
              <HotDeals/>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;



