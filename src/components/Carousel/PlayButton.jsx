import './PlayButton.css';

export const PlayButton = ({ }) => {
  return (
    <div className="state-button">
      <div className="state-button-container">
        <input type="checkbox" className="state-button-input" />
        <div className="state-button-line left"></div>
        <div className="state-button-line right"></div>
        <div className="state-button-line bottom"></div>
      </div>
    </div>
  );
}