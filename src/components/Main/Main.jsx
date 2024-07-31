import { Introduction } from "../Introduction/Introduction";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import "./Main.css";
import { Interests } from "../Interests/Interests";
import { Art } from "../Art/Art";

export const Main = ({ lenis }) => {
  return (
    <main className="main">
      <Introduction
        lenis={lenis}
      />
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