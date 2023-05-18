// JSON Data
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";

// Icons
import searchIcon from "./assets/icons/search.svg";
import addCommentIcon from "./assets/icons/add_comment.svg";
import closeFullscreenIcon from "./assets/icons/close_fullscreen.svg";
import fullScreenIcon from "./assets/icons/fullscreen.svg";
import likesIcon from "./assets/icons/likes.svg";
import pauseIcon from "./assets/icons/pause.svg";
import playIcon from "./assets/icons/play.svg";
import publishIcon from "./assets/icons/publish.svg";
import scrubIcon from "./assets/icons/scrub.svg";
import uploadIcon from "./assets/icons/upload.svg";
import viewsIcon from "./assets/icons/views.svg";
import volumeOffIcon from "./assets/icons/volume_off.svg";
import volumeUpIcon from "./assets/icons/volume_up.svg";

// Images
import avatarImg from "./assets/images/Mohan-muruge.jpg";
import logoImg from "./assets/logo/BrainFlix-logo.svg";

// Styles
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="./index.html" className="header__logo">
          <img className="header__logo-img" src={logoImg} alt="logo" />
        </a>
        <div className="header__search">
          <form className="header__search-form">
            <button className="header__search-form-btn">
              <img src={searchIcon} alt="search" />
            </button>
            <input
              type="text"
              className="header__search-form-input"
              name="search"
              placeholder="Search"
            />
            <div className="header__search-avatar">
              <img
                src={avatarImg}
                alt="avatar"
                className="header__search-avatar-img"
              />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
