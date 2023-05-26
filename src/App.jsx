// Components
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";

// Pages
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Images
import avatarImg from "./assets/images/Mohan-muruge.jpg";

// Styles
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header avatarImg={avatarImg} />
        <Routes>
          <Route path="/" element={<VideoPage avatarImg={avatarImg} />} />
          <Route path="/video" element={<Navigate to="/" />} />
          <Route
            path="/video/:videoId"
            element={<VideoPage avatarImg={avatarImg} />}
          />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
