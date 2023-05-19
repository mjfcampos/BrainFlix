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
          <form action="" className="comment__form">
            <div className="avatar avatar--comments">
              <img src={avatarImg} alt="avatar" className="avatar__img" />
            </div>
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
                <div className="button button--comment">
                  <button className="button__style">
                    <img
                      src={addCommentIcon}
                      alt="upload"
                      className="button__img"
                    />
                    Comment
                  </button>
                </div>
              </div>
            </fieldset>
          </form>

          <ul className="comment__messages-list">
            {activeComments.map((comment) => (
              <li
                key={comment.id}
                className="comment__container comment__container--messages"
              >
                <div className="avatar avatar--comments">
                  <img src={avatarImg} alt="avatar" className="avatar__img" />
                </div>
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
        </div>
      </section>
    </article>
  );
}
export default Article;
