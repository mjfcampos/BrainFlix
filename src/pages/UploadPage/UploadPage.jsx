import { useNavigate } from "react-router-dom";
import Form from "../../components/UploadForm/UploadForm";
import "./UploadPage.scss";

function UploadPage() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.innerText.toLowerCase() === "publish") {
      console.log(event.target.name.value);
      console.log(event.target.name.description);
      console.dir(event.target);
      alert("File uploaded sucessfully");
    }
    navigate("/");
  };
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <Form handleClick={handleClick} formType="UploadVideo" />
    </div>
  );
}

export default UploadPage;
