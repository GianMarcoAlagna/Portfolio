import Card from "../Card/Card";
import { RiFileList3Fill } from "react-icons/ri";

export const Resume = () => {
  return (
    <Card>
      <Card.Header>
        Curriculum Vitae
      </Card.Header>
      <Card.Body>
        <a
          className="Introduction__link"
          href={Links.resume}
          target="_blank"
          rel="noreferrer"
        >
          <RiFileList3Fill />
          View my resume
        </a>
      </Card.Body>
    </Card>
  );
}
