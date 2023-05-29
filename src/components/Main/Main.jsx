import Article from "../Article/Article";
import Aside from "../Aside/Aside";
import "./Main.scss";

function Main({
  activeVideo,
  activeComments,
  avatarImg,
  videosList,
  ReactTimeAgo,
}) {
  return (
    <main className="main">
      <Article
        activeVideo={activeVideo}
        activeComments={activeComments}
        ReactTimeAgo={ReactTimeAgo}
        avatarImg={avatarImg}
      />
      <Aside videosList={videosList} activeVideo={activeVideo} />
    </main>
  );
}

export default Main;
