import "./Hero.scss";

function Hero({ activeVideoDetail, apiKey }) {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <video
          controls
          poster={activeVideoDetail.image}
          src={activeVideoDetail.video + apiKey}
          className="hero__video"
        ></video>
      </div>
    </section>
  );
}

export default Hero;
