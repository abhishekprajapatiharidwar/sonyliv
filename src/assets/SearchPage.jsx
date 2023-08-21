import "./Searchpage.css";
import Singleslide from "./Singleslide";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [data, setdata] = useState([]);
  const apiUrl = "https://academics.newtonschool.co/api/v1/ott/show";
  const headers = {
    projectId: "62b02tyexb5i",
  };

  useEffect(() => {
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => setdata(data.data))
      .catch((error) => console.error("Error fetching data:", error));
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
          {filteredData.length === 0 ? (
            <div className="notfound">
              <img src="https://origin-staticv2.sonyliv.com/UI_icons/paymentscreenicons/no_result.png"></img>
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
