import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiBitbucket
} from "react-icons/si";

import {

} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><SiBitbucket /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><SiVisualstudiocode /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="wave" role="img" aria-labelledby="wave"><SiPostman /></span>
        
      </Col>
    </Row>
  );
}

export default Toolstack;
