import Button from "../Button/Button";
import "./CommentForm.scss";

function CommentForm({ avatarImg, addCommentIcon, Avatar }) {
  return (
    <form className="comments__form">
      <Avatar avatarImg={avatarImg} classes="avatar avatar--comments" />
      <fieldset className="comments__form-fieldset">
        <label htmlFor="comment" className="comments__form-label">
          Join the Conversation
        </label>
        <div className="comments__form-text-container">
          <textarea
            name="comment"
            className="comments__form-text comments__form-text--textarea"
            id="comment"
            cols="1"
            rows="1"
            placeholder="Add a new comment"
          ></textarea>
          <Button icon={addCommentIcon} text="Comment" />
        </div>
      </fieldset>
    </form>
  );
}

export default CommentForm;
