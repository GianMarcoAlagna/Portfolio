import Stack from "../../Util/Stack.json";
import Typed from "../../../effects/Typed/Typed";
import "./About.css";

export const About = ({ isActive }) => {
  const dashStyle = { color: "oklch(70% 0.19981 255.155)" };
  return (
    <div className={`about-content ${isActive ? "active" : "inactive"}`}>
      <h2 className="about-content-title">
        <Typed key={"about-me"}>
          About<span style={dashStyle}>-</span>Me
        </Typed>
      </h2>
      <div className="about-content-body">
        I&apos;m a full stack developer based in the <b>United States, Texas</b>
        . <br />I have a passion for <b>web development</b> and love creating
        beautiful and memorable applications.
        <div className="about-content-body-stack">
          I&apos;m competent in the following technologies, and have had hands
          on experience with many others.
          <br />
          <ul className="grid impression">
            {Stack.map((stack) => (
              <li key={stack} className="grid__list-item">
                <b>
                  <u>{stack}</u>
                </b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
