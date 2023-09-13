import React, { useState, useEffect } from "react";
import Singleslide from "./Singleslide";
import "./SearchPage.css";
import Loading from "./Loading";


export default function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const apiUrl = "https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=1000";
  const headers = {
    projectId: "62b02tyexb5i",
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when making the API call
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  return (
    <>
      <div className="SearchPage">
        <input
          type="text"
          placeholder="Search for movies, shows, sports etc."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <section className="Searchdatasection">
          {loading ? (
            // Display a loader when loading is true
            <Loading/>
          ) : filteredData.length === 0 ? (
            <div className="notfound">
              <img src="https://origin-staticv2.sonyliv.com/UI_icons/paymentscreenicons/no_result.png" alt="Not Found" />
              <p>Sorry! Couldn't find any results matching '{searchText}'</p>
            </div>
          ) : (
            filteredData.map((item, i) => (
              <Singleslide key={item._id} slidesingledata={item} />
            ))
          )}
        </section>
      </div>
    </>
  );
}
