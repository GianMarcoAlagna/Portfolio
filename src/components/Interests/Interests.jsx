import { Card } from "../Card/Card";
import InterestsJson from "../Util/Interests.json";

export const Interests = () => {
  const interests = Object.entries(InterestsJson).map(([key, value]) => <Interest key={key} title={key} description={value} />);
  return (
    <Card className="interests">
      <Card.Header>
        <h2 className="header">
          Interests
        </h2>
      </Card.Header>
      <Card.Body className="grid">
        <div className="grid">
          {interests}
        </div>
      </Card.Body>
    </Card>
  );
}

const Interest = ({ title, description }) => {
  return (
    <Card className="interests__interest">
      <Card.Header className="interests__interest__title">
        <h4 className="header">
          {title}
        </h4>
      </Card.Header>
      <Card.Body className="interests__interest__description">
        {description}
      </Card.Body>
    </Card>
  );
}
