import "./Avatar.scss";

function Avatar({ avatarImg, classes }) {
  return (
    <div className={classes}>
      {avatarImg ? (
        <img src={avatarImg} alt="avatar" className="avatar__img" />
      ) : (
        ""
      )}
    </div>
  );
}

export default Avatar;
