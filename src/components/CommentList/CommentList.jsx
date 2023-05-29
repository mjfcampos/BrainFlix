import Comment from "../Comment/Comment";
import "./CommentList.scss";

function CommentList({ activeComments, avatarImg, Avatar }) {
  return (
    <ul className="comment__list">
      {activeComments
        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
        .map((comment) => (
          <li key={comment.id} className="comment__list-item">
            <Comment comment={comment} />
          </li>
        ))}
    </ul>
  );
}

export default CommentList;
