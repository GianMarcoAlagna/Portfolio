import { useState } from "react";
import Card from "../Card/Card";
import { Modal } from "../Modal/Modal";
import ProjectsJson from "../Util/Projects.json";
import "./Projects.css";

export const Projects = () => {
  const projectList = Object.values(ProjectsJson).map((project, index) => {
    return (
      <Project key={index} project={project} />
    );
  });
  return (
    <Card className="projects">
      <Card.Header>
        <h2 className="header">
          Recent Projects
        </h2>
      </Card.Header>
      <Card.Body>
        <div className="grid">
          {projectList}
        </div>
      </Card.Body>
    </Card>
  );
}

const Project = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <Card>
      <Card.Header>
        <h3 className="header">
          {project.title}
        </h3>
      </Card.Header>
      <Card.Image src={project.image} alt={project.title + " Image"} />
      <Card.Body>
        <p>
          {project.description_short}
        </p>
      </Card.Body>
      <Card.Footer>
        <button onClick={openModal}>
          Learn More
        </button>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <Modal.Header>
            <h2 className="header">
              {project.title}
            </h2>
          </Modal.Header>
          <Modal.Body>
            <p>
              {project.description}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
            <button onClick={closeModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </Card.Footer>
    </Card>
  );
}
