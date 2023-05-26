import { useNavigate } from "react-router-dom";
import "./Button.scss";

function Button({ icon, text, destRoute, type, buttonClickFunction }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event);
    navigate(destRoute);
    buttonClickFunction();
  };
  // console.log("destRoute: ", destRoute);

  return (
    <div className="btn btn--comment">
      <button
        onClick={destRoute ? buttonClickFunction : null}
        type={type}
        className="btn__style"
      >
        <img src={icon} alt={text} className="btn__img" />
        {text}
      </button>
    </div>
  );
}
export default Button;
