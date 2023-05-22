import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import "./Header.scss";

function Header({ logoImg, searchIcon, avatarImg, uploadIcon }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a href="./index.html">
            <img src={logoImg} alt="logo" className="header__logo-img" />
          </a>
        </div>
        <div className="header__searchbox">
          <div className="header__searchbox__search">
            <div className="header__searchbox__search-input">
              <input
                type="search"
                className="header__searchbox__input"
                id="search"
                placeholder="Search"
              />
              <img
                src={searchIcon}
                alt="search"
                className="header__searchbox__img"
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
