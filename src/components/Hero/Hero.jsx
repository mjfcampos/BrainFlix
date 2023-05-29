import "./Hero.scss";

function Hero({ activeVideo, apiKey }) {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <video
          controls
          poster={activeVideo.image}
          src={`${activeVideo.video}?api_key=${apiKey}`}
          className="hero__video"
        ></video>
      </div>
    </section>
  );
}

export default Hero;
