import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import "./Header.scss";

function Header({ logoImg, searchIcon, avatarImg, uploadIcon }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a href="#">
            <img src={logoImg} alt="logo" className="header__logo-image" />
          </a>
        </div>
        <div className="searchBox">
          <div className="searchBox__avatar-searchBox">
            <div className="searchBox__container">
              <input
                type="search"
                className="searchBox__input"
                id="search"
                placeholder="Search"
              />
              <img
                src={searchIcon}
                alt="search"
                className="searchBox__img-bg"
              />
            </div>
            <Avatar avatarImg={avatarImg} classes="avatar" />
          </div>
          <Button icon={uploadIcon} text="Upload" />
        </div>
      </div>
    </header>
  );
}

export default Header;
