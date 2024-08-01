import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { Interests } from "../Interests/Interests";
import { Art } from "../Art/Art";
import "./Main.css";

export const Main = () => {
  return (
    <main className="main">
      <section className="main__section">
        <article className="main__article">
          <div className="constrain">
            <About />
          </div>
          <div className="constrain">
            <Skills />
          </div>
          <div className="constrain">
            <Projects />
          </div>
          <div className="constrain">
            <Art />
          </div>
          <div className="constrain">
            <Interests />
          </div>
        </article>
      </section>
    </main>
  );
};