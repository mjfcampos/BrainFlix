import { useNavigate } from "react-router-dom";
import "./VideoList.scss";

function VideoList({ videosList, activeVideo }) {
  const navigate = useNavigate();

  const handleVideoClick = (id) => {
    navigate(`/video/${id}`);
  };

  return (
    <ul className="video__list">
      {videosList
        .filter((video) => video.id !== activeVideo.id)
        .map((video) => (
          <li
            onClick={() => handleVideoClick(video.id)}
            key={video.id}
            className="video__list__item"
          >
            <div className="video__list__item-video">
              <img
                src={video.image}
                alt=""
                className="video__list__item-video"
              />
            </div>
            <div className="video__list__item-description">
              <p className="video__list__item-description-title">
                {video.title}
              </p>
              <p className="video__list__item-description-author">
                {video.channel}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default VideoList;
