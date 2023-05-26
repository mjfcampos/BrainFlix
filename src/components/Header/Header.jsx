import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import logoImg from "../../assets/logo/BrainFlix-logo.svg";
import "./Header.scss";

function Header({ avatarImg }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    // console.log(event);
    navigate("/upload");
    // buttonClickFunction();
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/video">
            <img src={logoImg} alt="logo" className="header__logo-img" />
          </Link>
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
          <Button icon={uploadIcon} text="Upload" handleClick={handleClick} />
        </div>
      </div>
    </header>
  );
}

export default Header;
