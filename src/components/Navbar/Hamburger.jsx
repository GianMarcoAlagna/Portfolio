import './Hamburger.css';

export const Hamburger = ({ onClick, checked }) => {
  return (
    <div className={"triple-bar"} onClick={onClick}>
      <input type="checkbox" className="triple-bar__input" checked={checked} />
      <div className="triple-bar__bar bar-left">
      </div>
      <div className="triple-bar__bar bar-middle">
      </div>
      <div className="triple-bar__bar bar-right">
      </div>
    </div>
  );
}