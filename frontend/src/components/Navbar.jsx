import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const [posts, setposts] = useState([]);
  const category = useLocation().search.substring(5);
  const navigate = useNavigate();
  const { currentuser } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const handlecategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8800/post/all/?${category}`
      );
      setposts(res.data);
      console.log(res.data);
    } catch (err) {
      return err;
    }
  };
  const handlelogout = async () => {
    try {
      //   const res = await axios.get("http://localhost:8800/auth/logout");
      const res = await logout();
      console.log(res);
      navigate("/login");
    } catch (err) {
      return err;
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="" alt=""></img>
          </div>
          <div className="links">
            <Link to="/?cat=art" className="link">
              <div onClick={handlecategory}> Art</div>
            </Link>
            <Link to="/?cat=science" className="link">
              <div> Science</div>
            </Link>
            <Link to="/?cat=literature" className="link">
              <div> Literature</div>
            </Link>
            <Link to="/?cat=technology" className="link">
              <div> Technology</div>
            </Link>
            <span>{currentuser.username}</span>
            <span onClick={handlelogout} style={{ cursor: "pointer" }}>
              Logout
            </span>
            <span className="write">
              <Link to="/write" className="link ">
                write
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
