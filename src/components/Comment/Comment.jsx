import Avatar from "../Avatar/Avatar";
import HumanTimeAgo from "../Utils/HumanTimeAgo";
import "./Comment.scss";

function Comment({ comment }) {
  return (
    <div className="comment__container">
      <Avatar classes="avatar avatar--comments" />

      <div className="comment__content">
        <div className="comment__header">
          <p className="comment__title">{comment.name}</p>
          <p className="comment__date">
            <HumanTimeAgo timestampdate={comment.timestamp} />
          </p>
        </div>
        <p className="comment__text">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
