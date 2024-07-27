import Card from "../Card/Card";
import { IoIosMail } from "react-icons/io";

export const Contact = () => {
  return (
    <Card>
      <Card.Header>
        <h4 className="header">Contact</h4>
      </Card.Header>
      <Card.Body>
        <a
          className="Introduction__link"
          href="mailto: marcoalagna1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail />
          Marcoalagna1@gmail.com
        </a>
      </Card.Body>
    </Card>
  );
}
