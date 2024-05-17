import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiCss3
} from "react-icons/di";
import {
 SiHtml5,
 SiMui,
 SiTypescript,
 SiBootstrap
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><DiJavascript1 /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="wave" role="img" aria-labelledby="wave"><SiBootstrap /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><DiReact /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><DiGit /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><SiHtml5 /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><DiCss3/></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><SiMui /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><SiTypescript /></span>
      </Col>
    </Row>
  );
}

export default Techstack;
