import logo from "./assets/logo/BrainFlix-logo.svg";
import search from "./assets/icons/search.svg";
import avatar from "./assets/images/Mohan-muruge.jpg";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <header class="header">
        <a href="./index.html" class="header__logo">
          <img className="header__logo-img" src={logo} alt="logo" />
        </a>
        <div className="header__search">
          <form className="header__search-form">
            <button className="header__search-form-btn">
              <img src={search} alt="search" />
            </button>
            <input
              type="text"
              className="header__search-form-input"
              name="search"
              placeholder="Search"
            />
            <div className="header__search-avatar">
              <img
                src={avatar}
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
