import "./Video.scss";

function Video({ video }) {
  return (
    <>
      <div className="video__img">
        <img src={video.image} alt={video.title} className="video__img" />
      </div>
      <div className="video__description">
        <p className="video__description-title">{video.title}</p>
        <p className="video__description-author">{video.channel}</p>
      </div>
    </>
  );
}

export default Video;
