import Avatar from "../Avatar/Avatar";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import HumanTimeAgo from "../Utils/HumanTimeAgo";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "./Article.scss";

function Article({ activeVideo, avatarImg }) {
  return (
    <article className="article">
      <section className="info">
        <div className="info__wrapper">
          <h1 className="info__header">{activeVideo.title}</h1>
          <div className="info__section">
            <div className="info__first-section">
              <p className="info__author">By {activeVideo.channel}</p>
              <p className="info__text">
                <HumanTimeAgo timestampdate={activeVideo.timestamp} />
              </p>
            </div>
            <div className="info__second-section">
              <div className="info__views">
                <img src={viewsIcon} alt="viewsImg" />
                <p className="info__text">{activeVideo.views}</p>
              </div>
              <div className="info__likes">
                <img src={likesIcon} alt="likesImg" />
                <p className="info__text">{activeVideo.likes}</p>
              </div>
            </div>
          </div>
          <p className="info__description">{activeVideo.description}</p>
        </div>
      </section>
      <section className="comments">
        <div className="comments__wrapper">
          <p className="comments__count">
            {activeVideo.comments.length}{" "}
            {activeVideo.comments.length > 1 ? "Comments" : "Comment"}
          </p>
          <CommentForm avatarImg={avatarImg} Avatar={Avatar} />
          <CommentList
            activeComments={activeVideo.comments}
            avatarImg={avatarImg}
            Avatar={Avatar}
          />
        </div>
      </section>
    </article>
  );
}
export default Article;
