import "./CommentList.scss";

function CommentList({ activeComments, ReactTimeAgo, avatarImg, Avatar }) {
  return (
    <ul className="comment__messages-list">
      {activeComments.map((comment) => (
        <li
          key={comment.id}
          className="comment__container comment__container--messages"
        >
          <Avatar avatarImg={avatarImg} classes="avatar avatar--comments" />

          <div className="comment__message">
            <div className="comment__message-header">
              <p className="comment__title">{comment.name}</p>
              <p className="comment__date">
                <ReactTimeAgo date={comment.timestamp} locale="en-US" />
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
