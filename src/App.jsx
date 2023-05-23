// Components
import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

// JSON Data
import videosJSON from "./data/videos.json";
import videoDetailsJSON from "./data/video-details.json";

// Images
import avatarImg from "./assets/images/Mohan-muruge.jpg";

// Styles
import "./styles/global.scss";

function App() {
  const apiKey = "?api_key=marcelo";
  const [videos] = useState(videosJSON);
  const [videoDetails] = useState(videoDetailsJSON);
  const [activeVideoDetail, setActiveVideoDetail] = useState(videoDetails[0]);

  // Get comments for the active video and store them inside "activeComments"
  const { comments: activeComments } = activeVideoDetail;

  const handleVideoClick = (id) => {
    const foundVideo = videoDetails.find((video) => video.id === id);
    setActiveVideoDetail(foundVideo);
  };
  return (
    <div className="App">
      <Header avatarImg={avatarImg} />
      <Hero activeVideoDetail={activeVideoDetail} apiKey={apiKey} />
      <Main
        activeVideoDetail={activeVideoDetail}
        activeComments={activeComments}
        avatarImg={avatarImg}
        handleVideoClick={handleVideoClick}
        videos={videos}
      />
    </div>
  );
}

export default App;
