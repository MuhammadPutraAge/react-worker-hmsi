import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ title, type = "primary", onClick = () => {}, href }) => {
  if (href) {
    return (
      <Link
        to={href}
        className={`btn ${
          type === "primary" ? "btn-primary" : "btn-secondary"
        }`}
      >
        {title}
      </Link>
    );
  }

  return (
    <button
      className={`btn ${type === "primary" ? "btn-primary" : "btn-secondary"}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
