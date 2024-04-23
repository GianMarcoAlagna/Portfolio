import { Introduction } from "../Introduction/Introduction";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
// import { Other } from "../Other/Other";
import "./Main.css";
import { Projects } from "../Projects/Projects";

export const Main = () => {
  return (
    <main className="main">
      <Introduction />
      <section className="main__section">
        <article className="main__article">
          <div className="grid">
            <About />
            <Projects />
          </div>
          <div className="full">
            <Skills />
          </div>
        </article>
      </section>
    </main>
  );
};