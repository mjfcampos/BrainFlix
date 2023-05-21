import "./VideoList.scss";

function VideoList({ videos, handleVideoClick, activeVideoDetail }) {
  return (
    <ul>
      {videos
        .filter((video) => video.id !== activeVideoDetail.id)
        .map((video) => (
          <li
            onClick={() => handleVideoClick(video.id)}
            key={video.id}
            className="next-videos__container"
          >
            <div className="next-videos__video">
              <img src={video.image} alt="" className="next-videos__video" />
            </div>
            <div className="next-videos__description">
              <p className="next-videos__description-title">{video.title}</p>
              <p className="next-videos__description-author">{video.channel}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default VideoList;
