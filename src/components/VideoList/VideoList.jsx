import "./VideoList.scss";

function VideoList({ videos, handleVideoClick, activeVideoDetail }) {
  return (
    <ul className="video__list">
      {videos
        .filter((video) => video.id !== activeVideoDetail.id)
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
