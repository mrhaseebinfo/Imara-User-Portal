import { Container, Row, Col } from "react-bootstrap";
import ImaratProject from "./Imarat-Project-Card/ImaratProject";
import InvestmentCard from "./InvestmentCard/InvestmentCard";

const MyInvestment = () => {
  return (
    <Container fluid>
      <Row className="full-width-row mt-2">
        <Col xs={12} className="heading-sm">
          <h2 className="fs-3 text-white fw-bold">Imarat Project</h2>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs={12} md={6} lg={12} className="d-flex">
          <ImaratProject />
        </Col>
      </Row>

      <Row className="mt-2 ">
        <Col xs={12} md={6} lg={12} className="d-flex">
          <InvestmentCard />
        </Col>
      </Row>
     
    </Container>
  );
};

export default MyInvestment;
