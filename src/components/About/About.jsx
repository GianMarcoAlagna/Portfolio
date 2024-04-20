import Card from "../Card/Card";
import Stack from "../Util/Stack.json";

export const About = () => {
  return (
    <Card className="About">
      <Card.Header>
        <h2 className="Header">
          About Me
        </h2>
      </Card.Header>
      <Card.Body>
        I'm a full stack developer based in the United States, Texas. <br />
        I have a passion for web development and love creating beautiful and memorable applications. <br />
        I'm always looking for new opportunities to learn and grow as a developer. <br />
      </Card.Body>
      <Card.Footer>
        My day to day stack includes: <br />
        <ul
          className="Grid__list"
        >
          {Stack.map(stack => (
            <li
              key={stack}
              className="Grid__list-item"
            >
              {stack}
            </li>
          ))
          }
        </ul>
      </Card.Footer>
    </Card>
  );
}