import React, { useRef, useEffect } from "react";
import "./Videoplayer.css";
import { useContext } from "react";
import { MyContext } from "./mycontext";
import { useParams } from "react-router-dom";

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const { videoid } = useParams();
  const {
    Singledetaildata,
    setSingledetaildata,
    currenvideo,
    setcurrentvideo,
  } = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show/${videoid}`;
    const headers = {
      projectId: "62b02tyexb5i",
    };
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => setcurrentvideo(data.data))
      .catch((error) => console.error("Error fetching data:", error));
    if (videoRef.current) {
      videoRef.current.src = currenvideo?.video_url;
      videoRef.current.play();
    }
  }, [Singledetaildata]);
  console.log(currenvideo);

  return (
    <div className="VideoPlayer">
      
      <video ref={videoRef} src={currenvideo?.video_url} controls>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
