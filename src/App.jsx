import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Nav from "./assets/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import ShowDetails from "./assets/ShowDetails";
import Catagery from "./assets/Catagery";
import { data } from "./assets/data.json";
import VideoPlayer from "./assets/Videoplayer";
import { useContext } from "react";
import { MyContext } from "./assets/mycontext";
import Footer from "./assets/Footer";
import LoginPage from "./assets/LoginPage";
import WatchList from "./assets/WatchList";
import SearchPage from "./assets/SearchPage";
import Premium from "./assets/Premium";
import Satting from "./assets/Satting";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Using context to access shared state and functions
  const { jsondata, setjsondata, login, setlogin } = useContext(MyContext);

  // Check if user is logged in using local storage
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setlogin(true);
      console.log("login is " + login);
    }
  }, [login]);

  console.log(login);
  return (
    <>
      {/* Navigation bar */}
      <Nav />
      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/videoplayer/:videoid" element={<VideoPlayer />} />

        <Route
          path="/webseries"
          element={
            <Catagery
              pagename={"Web Series"}
              pagedata={data}
              catfilter={"web series"}
            />
          }
        />

        <Route
          path="/tvshow"
          element={
            <Catagery
              pagename={"TV Show"}
              pagedata={data}
              catfilter={"tv show"}
            />
          }
        />

        <Route
          path="/shortfilm"
          element={
            <Catagery
              pagename={"Short Film"}
              pagedata={data}
              catfilter={"short film"}
            />
          }
        />

        <Route
          path="/videosong"
          element={
            <Catagery
              pagename={"Video Song"}
              pagedata={data}
              catfilter={"video song"}
            />
          }
        />

        <Route
          path="/documentary"
          element={
            <Catagery
              pagename={"Documentary"}
              pagedata={data}
              catfilter={"documentary"}
            />
          }
        />

        <Route
          path="/trailer"
          element={
            <Catagery
              pagename={"Trailer"}
              pagedata={data}
              catfilter={"trailer"}
            />
          }
        />

        <Route
          path="/movies"
          element={
            <Catagery pagename={"Movies"} pagedata={data} catfilter={"movie"} />
          }
        />

        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/searchpage" element={<SearchPage />} />

        <Route path="/premium" element={<Premium />} />

        <Route path="/showdetails/:id" element={<ShowDetails />} />

        <Route path="/satting" element={<Satting />} />
      </Routes>
      {/* Display toast notifications */}
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
