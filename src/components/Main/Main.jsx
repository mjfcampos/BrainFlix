import Article from "../Article/Article";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";

function Main({ activeVideo, avatarImg, videosList, ReactTimeAgo }) {
  return (
    <main className="main">
      <Article
        activeVideo={activeVideo}
        ReactTimeAgo={ReactTimeAgo}
        avatarImg={avatarImg}
      />
      <VideoList videosList={videosList} activeVideo={activeVideo} />
    </main>
  );
}

export default Main;
