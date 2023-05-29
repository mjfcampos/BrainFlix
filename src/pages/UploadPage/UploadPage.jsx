import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import "./UploadPage.scss";

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
      <Form handleClick={handleClick} formType="UploadVideo" />
    </div>
  );
}

export default UploadPage;
