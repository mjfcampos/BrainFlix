import Avatar from "../Avatar/Avatar";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

import "./Article.scss";

function Article({
  activeVideoDetail,
  viewsIcon,
  likesIcon,
  activeComments,
  ReactTimeAgo,
  avatarImg,
  addCommentIcon,
}) {
  return (
    <article className="article">
      <section className="info">
        <div className="info__wrapper">
          <h1 className="info__header">{activeVideoDetail.title}</h1>
          <div className="info__section">
            <div className="info__first-section">
              <p className="info__author">{activeVideoDetail.channel}</p>
              <p className="info__text">
                <ReactTimeAgo
                  date={activeVideoDetail.timestamp}
                  locale="en-US"
                />
              </p>
            </div>
            <div className="info__second-section">
              <div className="info__views">
                <img src={viewsIcon} alt="viewsImg" />
                <p className="info__text">{activeVideoDetail.views}</p>
              </div>
              <div className="info__likes">
                <img src={likesIcon} alt="likesImg" />
                <p className="info__text">{activeVideoDetail.likes}</p>
              </div>
            </div>
          </div>
          <p className="info__description">{activeVideoDetail.description}</p>
        </div>
      </section>
      <section className="comment">
        <div className="comment__wrapper">
          <p className="comment__count">
            {activeComments.length}{" "}
            {activeComments.length > 1 ? "Comments" : "Comment"}
          </p>
          <CommentForm
            avatarImg={avatarImg}
            addCommentIcon={addCommentIcon}
            Avatar={Avatar}
          />
          <CommentList
            activeComments={activeComments}
            ReactTimeAgo={ReactTimeAgo}
            avatarImg={avatarImg}
            Avatar={Avatar}
          />
        </div>
      </section>
    </article>
  );
}
export default Article;
