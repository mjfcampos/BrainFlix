import "./Button.scss";

function Button({ icon, text }) {
  return (
    <div className="btn">
      <button className="btn__style">
        <img src={icon} alt={text} className="btn__icon" />
        {text}
      </button>
    </div>
  );
}
export default Button;
