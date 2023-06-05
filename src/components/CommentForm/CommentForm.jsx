import { useState } from "react";
import { useNavigate } from "react-router-dom";
// TODO: Axios will be used to post data: comments
// import axios from "axios";

import Button from "../Button/Button";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import resizeTextarea from "../../utils/resizetextarea";
import "./CommentForm.scss";

function CommentForm({ avatarImg, Avatar }) {
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  // TODO: The veriable bellow will be used in axios
  // const apiVideosURL = process.env.REACT_APP_API_SERVER;

  // TODO: Form and API. the function bellow is not done, it is not working
  const postNewComment = (newComment) => {
    // axios
    //   .post(`${apiVideosURL}`, {
    //     title: newVideo.title,
    //     description: newVideo.description,
    //     image: newVideo.image,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  // Create a handler for comment input
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  // Check if the form is valid
  const isFormValid = () => {
    if (!comment) {
      return false;
    }
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.comment.value);

    if (isFormValid()) {
      postNewComment({
        comment: event.target.title.comment,
      });
      alert("Functionality not implemented.");
      navigate("/");
    } else {
      alert("Failed to submit, you have some errors in your form");
    }
  };
  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <Avatar avatarImg={avatarImg} classes="avatar avatar--comments" />
      <fieldset className="commentForm__fieldset">
        <label htmlFor="comment" className="commentForm__label">
          Join the Conversation
        </label>
        <div className="commentForm__text-container">
          <textarea
            name="comment"
            id="comment"
            onInput={() => resizeTextarea("comment")}
            className="commentForm__text commentForm__text--textarea"
            placeholder="Add a new comment"
            onChange={handleChangeComment}
            value={comment}
          ></textarea>
          <Button
            icon={addCommentIcon}
            text="Comment"
            disabled={!isFormValid()}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default CommentForm;
