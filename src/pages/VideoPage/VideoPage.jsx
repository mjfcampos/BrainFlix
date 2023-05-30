import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import "./VideoPage.scss";

function VideoPage({ avatarImg }) {
  // load .env variable for the server URL, Create React App uses .env variables that start with REACT_APP_
  const API_URL = process.env.REACT_APP_API_SERVER;

  const apiKey = "0040d29c-3835-4c59-81b7-7ce4e654ded5";
  // const apiVideosURL = "https://project-2-api.herokuapp.com/videos";
  const apiVideosURL = API_URL + "/videos";

  const params = useParams();
  const navigate = useNavigate();

  const [videosList, setVideosList] = useState([]);
  const [activeVideo, setActiveVideo] = useState({});

  // Fetch video list
  useEffect(() => {
    axios
      .get(`${apiVideosURL}?api_key=${apiKey}`)
      .then((response) => {
        setVideosList(response.data);
        navigate(`/video/${response.data[0].id}`);
      })
      .catch((error) => {
        console.error("Error feching data from API:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch video by id
  useEffect(() => {
    if (params.videoId) {
      axios
        .get(`${apiVideosURL}/${params.videoId}?api_key=${apiKey}`)
        .then((response) => {
          setActiveVideo(response.data);
        })
        .catch((error) => {
          console.error("Error feching data from API:", error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.videoId]);

  return (
    <>
      {activeVideo.id && videosList.length > 0 ? (
        <div>
          <Hero activeVideo={activeVideo} apiKey={apiKey} />
          <Main
            activeVideo={activeVideo}
            avatarImg={avatarImg}
            videosList={videosList}
          />
        </div>
      ) : null}
    </>
  );
}

export default VideoPage;
