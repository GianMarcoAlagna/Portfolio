import Stack from "../../Util/Stack.json";

export const About = ({ isActive }) => {
  return (
    <div className={`about ${isActive ? "active" : "inactive"}`}>
      <h2 className="about-header">About Me</h2>
      <div className="about-body">
        I&apos;m a full stack developer based in the United States, Texas.{" "}
        <br />
        I have a passion for web development and love creating beautiful and
        memorable applications. <br />
        I&apos;m always looking for new opportunities to learn and grow as a
        developer. <br />
      </div>
      <div>
        I&apos;m competent in the following technologies, and have had hands on
        experience with many others <br />
        <ul className="grid">
          {Stack.map((stack) => (
            <li key={stack} className="grid__list-item">
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
