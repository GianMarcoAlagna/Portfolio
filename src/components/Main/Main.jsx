import { Introduction } from "../Introduction/Introduction";
import Typed from "../Typed/Typed";
import "./Main.css";

export const Main = () => {
  return (
    <main className="main">
      <div className="hero-header border-bottom">
        <p className="hero-header-text">
          <Typed>Welcome User</Typed>
        </p>
      </div>
      <Introduction />
    </main>
  );
};
