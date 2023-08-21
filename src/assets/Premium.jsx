import "./Premium.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Premium() {
  const [price, setprice] = useState("₹999");
  const handleRadioClick = (event) => {
    const radiobtnBoxes = document.querySelectorAll(".selectedclass");
    radiobtnBoxes.forEach((box) => box.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
    const selectedValue = event.currentTarget.getAttribute("value");
    setprice(selectedValue);
    console.log(selectedValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="premiumpage">
        <div className="marquee-container">
          <marquee behavior="scroll" direction="left" loop="infinite">
            <img
              className="marqueimage"
              src="https://images.slivcdn.com/videoasset_images/rocketboys5_multilang_portrait_thumb.jpg?q=high&fr=webp"
              alt="Image 1"
            />
            <img
              className="marqueimage"
              src="https://images.slivcdn.com/videoasset_images/jehanabad_7_portrait_thumb_newshow_rev.jpg?q=high&fr=webp"
              alt="Image 2"
            />
            <img
              className="marqueimage"
              src="https://images.slivcdn.com/videoasset_images/Tannab_portrait_thumb_sub.jpg?q=high&fr=webp"
              alt="Image 3"
            />
            <img
              className="marqueimage"
              src="https://images.slivcdn.com/videoasset_images/Indian_idol_portrait_thumb_sub.jpg?q=high&fr=webp"
            />
            <img
              className="marqueimage"
              src="https://images.slivcdn.com/videoasset_images/potluck2_portrait_thumb.jpg?q=high&fr=webp"
            />
            <img
              className="marqueimage"
              src="https://images.slivcdn.com/portrait_thumb/PSL2023GOB_Portrait_Thumb.jpg?q=high&fr=webp"
            />
          </marquee>
        </div>
        <div className="center-box">
          <h4>Subscribe to watch all content on Sony LIV</h4>

          <table className="rounded-table">
            <tr className="header-row">
              <th className="firstmentu">
                <p>Access All Content</p>
                <p>
                  Movies,Orignals And Live Sports{" "}
                  <InfoOutlinedIcon
                    style={{ color: "#FFC900", fontSize: "15px" }}
                  />
                </p>
              </th>
              <th
                className="selectedclass"
                value={"₹599"}
                onClick={handleRadioClick}
              >
                <div className="radiobtnbox">
                  <p>Mobile Only</p>
                  <p>
                    <span>₹599</span> <small>Yearly</small>
                  </p>
                </div>
              </th>
              <th
                className="selectedclass"
                value={"₹999"}
                onClick={handleRadioClick}
              >
                <div className="radiobtnbox">
                  <p>LIV Premium</p>
                  <p>
                    <span>₹999</span> <small>Yearly</small>
                  </p>
                </div>
              </th>
              <th
                className="selectedclass"
                value={"₹699"}
                onClick={handleRadioClick}
              >
                <div className="radiobtnbox">
                  <p>LIV Premium</p>
                  <p>
                    <span>₹699</span> <small>6 Months</small>
                  </p>
                </div>
              </th>
              <th
                className="selectedclass"
                value={"₹299"}
                onClick={handleRadioClick}
              >
                <div className="radiobtnbox">
                  <p>LIV Premium</p>
                  <p>
                    <span>₹299</span> <small>Monthly</small>
                  </p>
                </div>
              </th>
            </tr>
            <tr>
              <td>
                Number of logged in devices{" "}
                <InfoOutlinedIcon
                  style={{ color: "#FFC900", fontSize: "15px" }}
                />
              </td>
              <td>1</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>
                Watch on devices at same time{" "}
                <InfoOutlinedIcon
                  style={{ color: "#FFC900", fontSize: "15px" }}
                />
              </td>
              <td>1</td>
              <td>2</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                Max Video Quality{" "}
                <InfoOutlinedIcon
                  style={{ color: "#FFC900", fontSize: "15px" }}
                />
              </td>
              <td>HD (720p)</td>
              <td>FULL HD (1080p)</td>
              <td>FULL HD (1080p)</td>
              <td>FULL HD (1080p)</td>
            </tr>
            <tr>
              <td>Max Audio Quality</td>
              <td>Stereo 2.1</td>
              <td>Stereo 2.1</td>
              <td>Stereo 2.1</td>
              <td>Stereo 2.1</td>
            </tr>
            <tr>
              <td>
                Advertisement{" "}
                <InfoOutlinedIcon
                  style={{ color: "#FFC900", fontSize: "15px" }}
                />
              </td>
              <td>On Live Sports, Channels & Reality TV Shows</td>
              <td>On Live Sports, Channels & Reality TV Shows</td>
              <td>On Live Sports, Channels & Reality TV Shows</td>
              <td>On Live Sports, Channels & Reality TV Shows</td>
            </tr>
          </table>
          <p>Select a promo code</p>
          <div
            id="paybtn"
            onClick={() => {
              toast.success(`Payment Successful ${price}!`);
            }}
          >
            Pay {price}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
