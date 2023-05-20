import "./Button.scss";

function Button({ icon, text }) {
  return (
    <div className="btn btn--comment">
      <button className="btn__style">
        <img src={icon} alt={text} className="btn__img" />
        {text}
      </button>
    </div>
  );
}
export default Button;
