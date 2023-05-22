import Article from "../Article/Article";
import Aside from "../Aside/Aside";
import "./Main.scss";

function Main({
  activeVideoDetail,
  activeComments,
  avatarImg,
  handleVideoClick,
  videos,
  ReactTimeAgo,
}) {
  return (
    <main className="main">
      <Article
        activeVideoDetail={activeVideoDetail}
        activeComments={activeComments}
        ReactTimeAgo={ReactTimeAgo}
        avatarImg={avatarImg}
      />
      <Aside
        videos={videos}
        activeVideoDetail={activeVideoDetail}
        handleVideoClick={handleVideoClick}
      />
    </main>
  );
}

export default Main;
