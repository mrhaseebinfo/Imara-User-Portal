

import { Container, Row, Col } from "react-bootstrap";
import vectorGraph   from '../../assets/Images/Vector (1).png';
import "./Welcome.css";
import Cards from "./Card/card";
import ProjectDetails from "./Project-Detail/ProjectDetails.jsx";
import Offer from "./Offer-contaier/Offer.jsx";
import UpcomingEvent from "./Upcoming-event/UpcomingEvent.jsx";

function Welcome() {
   const CardData = [
    { title: "Total Investment", value: 47, imageSrc: vectorGraph },
    { title: "New Investments", value: 12, imageSrc: vectorGraph },
  ];

  return (
    <Container fluid className="mt-3 welcom-dash">
      {/* Greeting Section */}
      <Row className="mb-3">
        <Col xs={12} className="heading-sm">
          <h2 className="fs-4 text-white fw-normal">
            Hi <span className="text-black fw-bold">Shanzay,</span>
          </h2>
          <h6 className="text-color">Welcome Back!</h6>
        </Col>
      </Row>

      {/* Card and Project Section */}
      <Row className="flex-grow-1 ">
        <Col md={8} className="d-flex flex-column">
          <Row className="mb-3">
            {/* Pass the CardData to the Cards component */}
            <Cards data={CardData} />
          </Row>
          <Col xs={12} className="child-bg project-div flex-fill">
            <ProjectDetails/>
          </Col>
        </Col>

        <Col md={4} className="d-flex">
          <div className="child-bg offer-div flex-fill"><Offer/></div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <div className="md-10 child-bg mt-2 rounded upcoming-event">
            <UpcomingEvent/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;



