import HumanTimeAgo from "../Utils/HumanTimeAgo";
import "./CommentList.scss";

function CommentList({ activeComments, ReactTimeAgo, avatarImg, Avatar }) {
  return (
    <ul className="comment__list">
      {activeComments
        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
        .map((comment) => (
          <li key={comment.id} className="comment__list-item">
            <div class="comment__list-item-container">
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
          </li>
        ))}
    </ul>
  );
}

export default CommentList;
