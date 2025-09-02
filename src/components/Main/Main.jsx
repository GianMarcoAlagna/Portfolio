import { Introduction } from "../Introduction/Introduction";
import "./Main.css";

export const Main = ({ cursorFallback }) => {
  return (
    //! Implement cursor with svg within /public, make cursor: none; in CSS
    <main className={`main${!cursorFallback ? " hide-cursor" : ""}`}>
      <Introduction />
    </main>
  );
};
