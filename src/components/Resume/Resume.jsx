import Card from "../Card/Card";
import { RiFileList3Fill } from "react-icons/ri";
import Links from "../Util/Links.json";

export const Resume = () => {
  return (
    <Card>
      <Card.Header>
        Curriculum Vitae
      </Card.Header>
      <Card.Body>
        <a
          className="Introduction__link"
          href={Links.Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFileList3Fill />
          View my resume
        </a>
      </Card.Body>
    </Card>
  );
}
