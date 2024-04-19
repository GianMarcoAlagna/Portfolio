import './GradientText.css';

export const GradientText = ({ children }) => {
  return (
    <span className="gradient-text">
      {children}
    </span>
  );
}