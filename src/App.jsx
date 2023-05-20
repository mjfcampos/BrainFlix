// Components
import { useState } from "react";

import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

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
      <Main
        activeVideoDetail={activeVideoDetail}
        viewsIcon={viewsIcon}
        likesIcon={likesIcon}
        activeComments={activeComments}
        avatarImg={avatarImg}
        addCommentIcon={addCommentIcon}
        handleVideoClick={handleVideoClick}
        videos={videos}
      />
    </div>
  );
}

export default App;
