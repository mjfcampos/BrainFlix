import "./Button.scss";

function Button({ icon, text, type, addClassName, handleClick }) {
  if (icon) {
    return (
      <div className="btn">
        <button
          onClick={handleClick ? handleClick : null}
          type={type ? type : null}
          className={addClassName ? `btn__style ${addClassName}` : "btn__style"}
        >
          <img src={icon} alt={text} className="btn__img" />
          {text}
        </button>
      </div>
    );
  }
  return (
    <div className="btn">
      <button
        onClick={handleClick ? handleClick : null}
        type={type ? type : null}
        className={addClassName ? `btn__style ${addClassName}` : "btn__style"}
      >
        {text}
      </button>
    </div>
  );
}
export default Button;
