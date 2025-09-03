import { Introduction } from "../Introduction/Introduction";
import "./Main.css";

export const Main = ({ cursorFallback }) => {
  return (
    <main className={`main${!cursorFallback ? " hide-cursor" : ""}`}>
      <Introduction />
    </main>
  );
};
