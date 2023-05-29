import Button from "../Button/Button";
import uploadVideoPreview from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/icons/publish.svg";
import "./Form.scss";

function Form({ handleClick, formType }) {
  if (formType === "UploadVideo") {
    return (
      <form className="form">
        <fieldset className="form__fieldset">
          <label className="form__thumbnail">
            Video Thumbnail
            <div className="form__thumbnail-img-container">
              <img
                className="form__thumbnail-img"
                src={uploadVideoPreview}
                alt="preview "
              />
            </div>
          </label>
          <div className="form__text-container">
            <label className="form__text-title-label">
              Title Your Video
              <input
                className="form__text-title-input"
                type="text"
                name="title"
                placeholder="Add a title to your video"
              />
            </label>
            <label className="form__text-description-label">
              Add a Video Description
              <textarea
                name="description"
                className="form__text-description-textarea"
                placeholder="Add a description to your video"
              ></textarea>
            </label>
          </div>
        </fieldset>
        <div className="form__buttons">
          <Button
            icon={publish}
            text="Publish"
            type="submit"
            handleClick={handleClick}
          />
          <Button
            text="Cancel"
            type="submit"
            handleClick={handleClick}
            addClassName={"btn__style--cancel"}
          />
        </div>
      </form>
    );
  }
}

export default Form;
