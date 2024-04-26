import Card from "../Card/Card";
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
      </Card.Footer>
    </Card>
  );
}
