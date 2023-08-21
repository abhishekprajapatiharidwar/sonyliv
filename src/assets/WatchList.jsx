import "./WatchList.css";
import { useContext, useEffect, useState } from "react";
import Singleslide from "./Singleslide";
import { MyContext } from "./mycontext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WatchList() {
  const { watchlistdata, setwatchlistdata, login, setlogin } =
    useContext(MyContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      toast.warning("Please log in to access WatchList");
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    const projectId = "62b02tyexb5i";

    const fetchData = async () => {
      try {
        const apiUrl = `https://academics.newtonschool.co/api/v1/ott/watchlist/like`;
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
            projectID: projectId,
          },
        });

        if (response.ok) {
          console.log("API call successfuly");
          const data = await response.json();
          setwatchlistdata(data.data.shows || []);
        } else {
          console.error("API call failed");
        }
      } catch (error) {
        console.error("API call error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="WatchList">
        <h3>Mylist</h3>
        <p>WatchList</p>
        <div className="listname allfilterdata">
          {watchlistdata.map((item, i) => (
            <div className="moviecartpage" key={i}>
              <Singleslide slidesingledata={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
