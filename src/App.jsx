// Components
import { useState } from "react";
import ReactTimeAgo from "react-time-ago";

import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

// JSON Data
import videosJSON from "./data/videos.json";
import videoDetailsJSON from "./data/video-details.json";

// Icons
import searchIcon from "./assets/icons/search.svg";
import addCommentIcon from "./assets/icons/add_comment.svg";
import closeFullscreenIcon from "./assets/icons/close_fullscreen.svg";
import fullScreenIcon from "./assets/icons/fullscreen.svg";
import likesIcon from "./assets/icons/likes.svg";
import pauseIcon from "./assets/icons/pause.svg";
import playIcon from "./assets/icons/play.svg";
import publishIcon from "./assets/icons/publish.svg";
import scrubIcon from "./assets/icons/scrub.svg";
import uploadIcon from "./assets/icons/upload.svg";
import viewsIcon from "./assets/icons/views.svg";
import volumeOffIcon from "./assets/icons/volume_off.svg";
import volumeUpIcon from "./assets/icons/volume_up.svg";

// Images
import avatarImg from "./assets/images/Mohan-muruge.jpg";
import logoImg from "./assets/logo/BrainFlix-logo.svg";

// Styles
import "./styles/global.scss";

function App() {
  const apiKey = "?api_key=marcelo";
  const [videos] = useState(videosJSON);
  const [videoDetails] = useState(videoDetailsJSON);
  const [activeVideoDetail, setactiveVideo] = useState(videoDetails[0]);
  // Get comments for the active video and store them inside "activeComments"
  const { comments: activeComments } = activeVideoDetail;

  const handleVideoClick = (id) => {
    const foundVideo = videoDetails.find((video) => video.id === id);
    setactiveVideo(foundVideo);
  };
  return (
    <div className="App">
      <Header
        logoImg={logoImg}
        searchIcon={searchIcon}
        avatarImg={avatarImg}
        uploadIcon={uploadIcon}
      />
      <Hero activeVideoDetail={activeVideoDetail} apiKey={apiKey} />
      <main className="main">
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
              <p className="info__description">
                {activeVideoDetail.description}
              </p>
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
                      <img
                        src={avatarImg}
                        alt="avatar"
                        className="avatar__img"
                      />
                    </div>
                    <div className="comment__message">
                      <div className="comment__message-header">
                        <p className="comment__title">{comment.name}</p>
                        <p className="comment__date">
                          <ReactTimeAgo
                            date={comment.timestamp}
                            locale="en-US"
                          />
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
        <aside className="next-videos">
          <div className="next-videos__wrapper">
            <h2 className="next-videos__title">Next videos</h2>
            <ul>
              {videos
                .filter((video) => video.id != activeVideoDetail.id)
                .map((video) => (
                  <li
                    onClick={() => handleVideoClick(video.id)}
                    key={video.id}
                    className="next-videos__container"
                  >
                    <div className="next-videos__video">
                      <img
                        src={video.image}
                        alt=""
                        className="next-videos__video"
                      />
                    </div>
                    <div className="next-videos__description">
                      <p className="next-videos__description-title">
                        {video.title}
                      </p>
                      <p className="next-videos__description-author">
                        {video.channel}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
