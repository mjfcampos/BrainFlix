import VideoList from "../VideoList/VideoList";
import "./Aside.scss";

function Aside({ videosList, activeVideo }) {
  return (
    <aside className="videos">
      <div className="videos__wrapper">
        <h2 className="videos__title">Next videos</h2>
        <VideoList videosList={videosList} activeVideo={activeVideo} />
      </div>
    </aside>
  );
}

export default Aside;
