import { useState, useEffect } from "react";
import { Container, Row , Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import PictureAsPdfOutlined from "@mui/icons-material/PictureAsPdfOutlined";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "2rem" }}>
          <Col md={6}>
            <PictureAsPdfOutlined style={{fontSize: "5rem"}} />
          </Col>
        </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={6}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
        <Row className="resume">
          <Col md={6}>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
