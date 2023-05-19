import "./VideoList.scss";

function VideoList({ video, handleVideoClick }) {
  return (
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
  );
}

export default VideoList;
