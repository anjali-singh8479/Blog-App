import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const category=useLocation().search.slice(5)
    console.log(category)
    const[posts,setposts]=useState([])
  useEffect(()=>{
    
    const posts=async()=>{
        
        try{
            const res=await axios.get(`http://localhost:8800/post/all`)
            console.log(res.data)
            setposts(res.data)
        }catch(err){
            return err
        }
    }
    posts();
  },[])
  const gettext=(html)=>{
    const doc=new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent;
  }
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`http://localhost:8800/uploads/${post.img}`} alt=""></img>
            </div>
            <div className="content">
              <Link to="/single">
                <h2 className="title">{post.title}</h2>
              </Link>
              <p>
              {gettext(post.desc)}
              </p>
              <button className="button-readmore"><Link to={`/single/${post.id}`} className=" button-links">Read More</Link></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
