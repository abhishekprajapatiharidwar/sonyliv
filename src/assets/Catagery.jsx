import React, { useState, useEffect } from "react";
import Singleslide from "./Singleslide";
import "./Catagery.css";
import Loading from "./Loading";

export default function Catagery(props) {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); 
  const itemsPerPage = 50;

  // API fetching data
  // const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "${props.catfilter}"}`;
  const apiUrl=`https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=500&filter={"type": "${props.catfilter}"}`;
  const headers = {
    projectId: "62b02tyexb5i",
  };

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.data);
        setLoading(false); // Move this line inside the .then block
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle errors and set loading to false here
      });
  }, [apiUrl]);
  

  // Calculate total number of pages based on the fetched data
  const totalPages = Math.ceil(apiData.length / itemsPerPage);
  // Function to handle page changes
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = apiData.slice(startIndex, endIndex);

  return (
    <div style={{ padding: "2rem" }} className="catpagecontainer">
      <h3>{props.pagename}</h3>
      {/* Display filtered items */}
      {loading ? ( // Display a loading indicator while loading
        <Loading/>
      ) : (
        <>
      <section className="allfilterdata">
        {currentItems.map((item, i) => (
          <div className="moviecartpage" key={i}>
            <Singleslide slidesingledata={item} />
            <span>{item.title.slice(0, 25)}</span>
          </div>
        ))}
      </section>
    
      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      </>
        )}
    </div>
  );
}
