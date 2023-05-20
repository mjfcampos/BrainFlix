import HumanTimeAgo from "../Utils/HumanTimeAgo";
import "./CommentList.scss";

function CommentList({ activeComments, ReactTimeAgo, avatarImg, Avatar }) {
  return (
    <ul className="comment__messages-list">
      {activeComments.map((comment) => (
        <li
          key={comment.id}
          className="comment__container comment__container--messages"
        >
          <Avatar classes="avatar avatar--comments" />

          <div className="comment__message">
            <div className="comment__message-header">
              <p className="comment__title">{comment.name}</p>
              <p className="comment__date">
                <HumanTimeAgo timestampdate={comment.timestamp} />
              </p>
            </div>
            <p className="comment__text">{comment.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
