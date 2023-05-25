import Button from "../../components/Button/Button";
import "./UploadPage.scss";
import uploadVideoPreview from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/icons/publish.svg";

function UploadPage() {
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
            <div className="upload__form__btn-container">
              <div className="upload__form__btn-cancel">
                <button className="upload__form__btn-cancel__style">
                  Cancel
                </button>
              </div>
              <Button icon={publish} text="Publish" />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default UploadPage;
