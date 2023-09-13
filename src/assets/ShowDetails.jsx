import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./mycontext";
import "./ShowDetails.css";
import { NavLink, json } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AddIcon from "@mui/icons-material/Add";
import ShowsSlide from "./ShowsSlide";
import { data } from "./data.json";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

function Previewbtn() {
  const { Singledetaildata } = useContext(MyContext);
  return (
    <>
      <NavLink to={`/videoplayer/${Singledetaildata}`} className="previewbtn">
        <PlayArrowIcon /> Watch Free Preview
      </NavLink>
    </>
  );
}

function Subscriptionbtn() {
  return (
    <>
      <NavLink to="/premium" className="subbtndetails">
        <div id="submainbtn">
          <img
            src="https://images.slivcdn.com/UI_icons/packWise/premium_icon.png?h=24&w=24&q=high&fr=webp"
            id="crownlogo"
            alt="Crown Logo"
          />
          Subscribe Now
        </div>
        <p>Stream Live Sports and Ad-Free Orignals</p>
      </NavLink>
    </>
  );
}

function Detailactionbtn(props) {
  return (
    <div className="detailactionall">
      {props.detailbtnicon}
      {props.detailbtntxt}
    </div>
  );
}

function AddList(props) {
  const { id } = useParams();
  const { dataadd, setdataadd, login } = useContext(MyContext);
  const listadd = async () => {
    if (login) {
      const jwtToken = localStorage.getItem("token");
      const projectId = "62b02tyexb5i";

      try {
        const apiUrl = `https://academics.newtonschool.co/api/v1/ott/watchlist/${id}`;
        const response = await fetch(apiUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
            projectID: projectId,
          },
          body: JSON.stringify({
            showId: id,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Succsess");
          setdataadd(data.data.shows);

          console.log(data);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    } else {
      toast.warning("Please log in to Add List");
    }
  };
  return (
    <div className="detailactionall" onClick={listadd}>
      {dataadd.some((data) => data === id) ? (
        <>
          <FileDownloadDoneIcon />
          Remove
        </>
      ) : (
        <>
          {props.detailbtnicon}
          {props.detailbtntxt}
        </>
      )}
    </div>
  );
}

const ShowDetails = (props) => {
  const { id } = useParams();
  const { Singledetaildata } = useContext(MyContext);
  const [slidedetailapi, setslidedetailapi] = useState({});
  const [randomSliceStart, setRandomSliceStart] = useState(0);

   // Function to copy URL to clipboard and show a toast
  const share = () => {
    const url = `https://sonylivclone.netlify.app/showdetails/${id}`;
    const textarea = document.createElement("textarea");
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    toast.success(`Copied URL to clipboard`);
  };
   // Function to handle sharing through the Web Share API
  const handleShare = () => {
    const url = `https://sonylivclone.netlify.app/showdetails/${id}`;
    if (navigator.share) {
      navigator
        .share({
          title: "Share",
          text: "Shrable",
          url: url,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Sharing not supported on this browser.");
    }
  };

  const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show/${id}`;
  const headers = {
    projectId: "62b02tyexb5i",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => setslidedetailapi(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Singledetaildata]);


  // Generate a random starting index for suggested shows
  useEffect(() => {
    const maxStartIndex = data.length - 15;
    const newRandomStart = Math.floor(Math.random() * maxStartIndex);
    setRandomSliceStart(newRandomStart);
  }, [Singledetaildata]);

  return (
    <div className="DeatilsPage">
      <section className="detailssection">
        <div className="detailsdescription">
          <div className="detailalltext">
            <h1>{slidedetailapi.title}</h1>
            <p>
              {slidedetailapi?.keywords?.map((keyword, index) => (
                <span key={index}>
                  <FiberManualRecordIcon
                    style={{ fontSize: "8px", color: "yellow", margin: "2px" }}
                  />
                  {keyword}
                </span>
              ))}
              {""}
              <FiberManualRecordIcon
                style={{ fontSize: "8px", color: "yellow", margin: "2px" }}
              />
              <span>{slidedetailapi.type}</span>
            </p>
            <p>{slidedetailapi.description}</p>
            <p>
              <span id="spantext">Cast: </span>{" "}
              {slidedetailapi.cast?.join(", ")}
            </p>
            <p>
              <span id="spantext">Director: </span>
              {slidedetailapi?.director}
            </p>
            <div className="detailsbtn">
              <Previewbtn />
              <Subscriptionbtn />
            </div>
            <div className="detailsactionbtn">
              <AddList
                detailbtnicon={<AddIcon style={{ marginRight: "4px" }} />}
                detailbtntxt={"My List"}
              />
              <div
                onClick={() => {
                  share();
                  handleShare();
                }}
              >
                <Detailactionbtn
                  detailbtnicon={
                    <ShareOutlinedIcon style={{ marginRight: "4px" }} />
                  }
                  detailbtntxt={"Share"}
                />
              </div>{" "}
            </div>
          </div>
        </div>
        <div
          className="detailsimage"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0),rgba(21, 21, 21, 1)), url(${slidedetailapi.thumbnail})`,
          }}
        ></div>
      </section>
    {/* Displaying suggested shows */}
      <section className="detailsuggestion">
        <ShowsSlide
          data={data.slice(randomSliceStart, randomSliceStart + 15)}
          sectionTitle={"More Like This"}
        />
        <ToastContainer />
      </section>
    </div>
  );
};

export default ShowDetails;
