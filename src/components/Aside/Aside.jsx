import VideoList from "../VideoList/VideoList";
import "./Aside.scss";

function Aside({ videos, activeVideoDetail, handleVideoClick }) {
  return (
    <aside className="next-videos">
      <div className="next-videos__wrapper">
        <h2 className="next-videos__title">Next videos</h2>
        <ul>
          {videos
            .filter((video) => video.id != activeVideoDetail.id)
            .map((video) => (
              <VideoList
                key={video.id}
                video={video}
                handleVideoClick={handleVideoClick}
              />
            ))}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
