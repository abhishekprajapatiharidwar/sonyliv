import { NavLink } from "react-router-dom";
import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import NavUser from "./NavUser";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./mycontext";

export default function Nav() {
  const [menuVisible, setMenuVisible] = useState(true);
  const { login, setlogin } = useContext(MyContext);

  function togglemenu() {
    setMenuVisible(!menuVisible);
  }
  return (
    <>
      <div className="nav">
        <div className="navlogo">
          <Link to="/">
            <img src="https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?w=40&q=high&fr=webp" />
          </Link>

          <Link to="/premium">
            <button className="navsubscribebtn">
              Subscribe<span>&gt;</span>
            </button>
          </Link>
        </div>

        {menuVisible && (
          <div className="navmenu">
            <span className="menulist">
              <NavLink to="/">Home</NavLink>
            </span>

            <span className="menulist">
              <NavLink to="/webseries">Web Series</NavLink>
            </span>
            <span className="menulist">
              <NavLink to="/tvshow">TV Show</NavLink>
            </span>
            <span className="menulist">
              <NavLink to="/shortfilm">Short film</NavLink>
            </span>
            <span className="menulist">
              <NavLink to="/videosong">Video Song</NavLink>
            </span>
            <span className="menulist">
              <NavLink to="/documentary">Documentary</NavLink>
            </span>
            <span className="menulist">
              <NavLink to="/trailer">Trailer</NavLink>
            </span>
            <span className="menulist">
              <NavLink to="/movies">Movies</NavLink>
            </span>

            <span className="menulist">
              <Link to="/premium">Premium</Link>
            </span>

            <span className="menulist">
              <Link to="/watchlist">WatchList</Link>
            </span>
          </div>
        )}

        <div className="navprofile">
          <div className="togglemenubtn" onClick={togglemenu}>
            <MenuIcon
              style={{
                fontSize: "2.3rem",
                color: "white",
                marginRight: "1rem",
              }}
            />{" "}
          </div>
          <a href="">
            <NavLink to="/searchpage">
              <SearchIcon
                style={{
                  fontSize: "30px",
                  color: "white",
                  marginRight: "1rem",
                }}
              />
            </NavLink>
          </a>
          <div className="container">
            <div className="profileicon">
              <img
                src={
                  login
                    ? `https://ui-avatars.com/api/?background=B74646&color=fff&name=${localStorage.getItem(
                        "username"
                      )}%&size=128`
                    : "data:image/png;base64,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"
                }
              />
            </div>
            <div className="NavProfilecont">
              <NavUser />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
