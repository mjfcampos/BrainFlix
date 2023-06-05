/*
* This function resizes the height of a textArea as new lines are necessary
* You can limit the maximun height size using CSS max-height
* Use this function inside your textarea element.
* e.g:
* 
<textarea
            name="description"
            id="description"
            onInput={() => resizeTextarea("description")}
></textarea>
*
* elementId should receive the ID of the textarea element 
*/
const resizeTextarea = (elementId) => {
  if (elementId) {
    const commentTextArea = document.getElementById(elementId);
    if (commentTextArea) {
      commentTextArea.style.height = "auto";
      commentTextArea.style.height = commentTextArea.scrollHeight + "px";
    }
  }
};

export default resizeTextarea;
