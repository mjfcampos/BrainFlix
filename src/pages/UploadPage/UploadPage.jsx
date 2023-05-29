import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./UploadPage.scss";
import uploadVideoPreview from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/icons/publish.svg";

function UploadPage() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.innerText.toLowerCase() === "publish") {
      alert("File uploaded sucessfully");
    }
    navigate("/");
  };
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form">
        <fieldset className="upload__form__fieldset">
          <label className="upload__form__thumbnail">
            Video Thumbnail
            <div className="upload__form__thumbnail-img">
              <img
                className="upload__form__thumbnail-img"
                src={uploadVideoPreview}
                alt="preview "
              />
            </div>
          </label>
          <div className="upload__form__text-container">
            <label className="upload__form__text-title-label">
              Title Your Video
              <input
                className="upload__form__text-title-input"
                type="text"
                name="title"
                placeholder="Add a title to your video"
              />
            </label>
            <label className="upload__form__text-description-label">
              Add a Video Description
              <textarea
                name="description"
                className="upload__form__text-description-textarea"
                placeholder="Add a description to your video"
              ></textarea>
            </label>
            <Button
              text="Cancel"
              type="submit"
              handleClick={handleClick}
              addClassName={"btn__style--cancel"}
            />
            <Button
              icon={publish}
              text="Publish"
              type="submit"
              handleClick={handleClick}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default UploadPage;
