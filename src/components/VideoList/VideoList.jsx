import { useNavigate } from "react-router-dom";
import Video from "../Video/Video";
import "./VideoList.scss";

function VideoList({ videosList, activeVideo }) {
  const navigate = useNavigate();

  const handleVideoClick = (id) => {
    navigate(`/video/${id}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="videos">
      <div className="videos__wrapper">
        <h2 className="videos__title">Next videos</h2>
        <ul className="videos__list">
          {videosList
            .filter((video) => video.id !== activeVideo.id)
            .map((video) => (
              <li
                onClick={() => handleVideoClick(video.id)}
                key={video.id}
                className="videos__list__item"
              >
                <Video video={video} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default VideoList;
