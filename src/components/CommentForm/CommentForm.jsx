import Button from "../Button/Button";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import "./CommentForm.scss";

function CommentForm({ avatarImg, Avatar }) {
  return (
    <form className="commentForm">
      <Avatar avatarImg={avatarImg} classes="avatar avatar--comments" />
      <fieldset className="commentForm__fieldset">
        <label htmlFor="comment" className="commentForm__label">
          Join the Conversation
        </label>
        <div className="commentForm__text-container">
          <textarea
            name="comment"
            className="commentForm__text commentForm__text--textarea"
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
