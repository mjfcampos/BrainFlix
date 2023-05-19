import "./Header.scss";

function Header({ logoImg, searchIcon, avatarImg, Button, uploadIcon }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a href="#">
            <img src={logoImg} alt="logo" className="header__logo-img" />
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
            <div className="avatar">
              <img src={avatarImg} alt="avatar" className="avatar__img" />
            </div>
          </div>
          {/* <div className="button">
             <button className="button__style">
              <img src={uploadImg} alt="upload" className="button__img" />
              Upload
            </button> 
          </div>*/}
          <Button icon={uploadIcon} text={"UPLOAD"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
