
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = (category) => {
    const[posts,setposts]=useState([])
  useEffect(()=>{
    const posts=async()=>{
        try{
         const res=await axios.get(`http://localhost:8800/post/all/?${category}`)
         setposts(res.data);
         console.log(res.data)
         return res.data
        }catch(err){
            return err
        }
    }
    posts()
  },[])
    

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="single-post" key={post.id}>
          <img src={`http://localhost:8800/uploads/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button className="button-readmore"><Link to={`/single/${post.id}`} className="button-links">ReadMore</Link></button>
        </div>
      ))}
    </div>
  );
};

export default Menu;