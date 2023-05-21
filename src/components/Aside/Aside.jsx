import VideoList from "../VideoList/VideoList";
import "./Aside.scss";

function Aside({ videos, activeVideoDetail, handleVideoClick }) {
  return (
    <aside className="videos">
      <div className="videos__wrapper">
        <h2 className="videos__title">Next videos</h2>
        <VideoList
          videos={videos}
          handleVideoClick={handleVideoClick}
          activeVideoDetail={activeVideoDetail}
        />
      </div>
    </aside>
  );
}

export default Aside;
