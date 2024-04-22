import { Introduction } from "../Introduction/Introduction";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
// import { Other } from "../Other/Other";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <Introduction />
      <section className="Main__section">
        <article className="Main__article">
          <About />
          <Skills />
        </article>
      </section>
    </main>
  );
};