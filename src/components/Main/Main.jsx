import Article from "../Article/Article";
import Aside from "../Aside/Aside";
import "./Main.scss";

function Main({
  activeVideoDetail,
  viewsIcon,
  likesIcon,
  activeComments,
  avatarImg,
  addCommentIcon,
  handleVideoClick,
  videos,
  ReactTimeAgo,
}) {
  return (
    <main className="main">
      <Article
        activeVideoDetail={activeVideoDetail}
        viewsIcon={viewsIcon}
        likesIcon={likesIcon}
        activeComments={activeComments}
        ReactTimeAgo={ReactTimeAgo}
        avatarImg={avatarImg}
        addCommentIcon={addCommentIcon}
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
