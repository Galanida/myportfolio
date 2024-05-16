import { Container, Row, Col } from "react-bootstrap";

function FooterPages() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Portpolio Designed and Developed by JenreyGalanida</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Galanids</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Front-End Web Developer</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterPages;
