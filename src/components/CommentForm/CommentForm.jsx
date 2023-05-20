import Button from "../Button/Button";
import "./CommentForm.scss";

function CommentForm({ avatarImg, addCommentIcon, Avatar }) {
  return (
    <form action="" className="comment__form">
      <Avatar avatarImg={avatarImg} classes="avatar avatar--comments" />
      <fieldset className="comment__fieldset">
        <label htmlFor="comment" className="comment__label">
          Join the Conversation
        </label>
        <div className="comment__textarea-container">
          <textarea
            name="comment"
            className="comment__textarea"
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
