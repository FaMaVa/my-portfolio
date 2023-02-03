import projectArray from "./projectData";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../styles/style.css";

export default function ProjectList() {

  return (
    <div>
      <Container id="portfolio">
        <Row xs={1} md={2} className="g-4">
          {Array.from(projectArray).map((project) => (
            <Col>
              <Card key={project.id}   className="projectCard">
                <Card.Img variant="top" className="pic" src={project.image} />
                <Card.Body  className="projectCardBody">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.summary}</Card.Text>

                  <Card.Link className="projectCardLink" href={project.deploy}>App</Card.Link>

                  <Card.Link className="projectCardLink" href={project.github}>GitHub</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};