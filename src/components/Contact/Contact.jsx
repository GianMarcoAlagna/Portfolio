import Card from "../Card/Card";
import { IoIosMail } from "react-icons/io";

export const Contact = () => {
  return (
    <Card>
      <Card.Header>
        Contact Me
      </Card.Header>
      <Card.Body>
        <a
          className="Introduction__link"
          href="mailto: marcoalagna1@gmail.com"
        >
          <IoIosMail />
          Marcoalagna1@gmail.com
        </a>
      </Card.Body>
    </Card>
  );
}
