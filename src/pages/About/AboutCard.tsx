import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jenrey Ladiao Galanida </span>
            from <span className="purple"> Southville 8b, San Isidro, Montalban, Philippines.</span>
            <br />
            I am Front-end Web Developer almost 2 years.
            <br />
            Graduated wih a <span className="purple"> Bachelor of Science in Information Technology </span>
             from <span className="purple"> Colegio De Montalban. </span> 
            <br />
            <br />
            Apart from coding, some other activities and hobbies that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Facebook Live Streaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Galanids</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
