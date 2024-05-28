import React, { useContext, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useLocation } from "react-router-dom";
const Write = () => {
    const state=useLocation().state
    const {currentuser}=useContext(AuthContext)
    const[desc,setdesc]=useState("")
const [value,setvalue]=useState(state ?{
    title:state.title,
    category:state.category,
    img:state.img,
    desc:state.desc,
    userid:state.id,
}:{
    title:"",
    category:"",
    img:"",
    userid:currentuser.id,
})
const handlechange=async(e)=>{
    setvalue((prev)=>({...prev,[e.target.name]:e.target.value}))
    console.log(value)
  }
  const handlepublish=async(e)=>{
    const formdata=new FormData()
  formdata.append("title",value.title)
  formdata.append("desc",desc)
  formdata.append("category",value.category)
  formdata.append("img",value.img)
  formdata.append("userid",value.userid)
    console.log("clicked")
    e.preventDefault()
try{
console.log("inside try")
 state?
 await axios.put(`http://localhost:8800/post/${state.id}`,value):
 await axios.post("http://localhost:8800/post/create",formdata)
// setvalue({
//     title:"",
//     category:"",
//     img:"",
//     userid:currentuser.id,
// })
setdesc("")
}catch(err){
    return err
}
  }
  return (
    <>
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={value.title}
          onChange={handlechange}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={state? state.desc :desc}
          onChange={setdesc}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            // style={{ display:"none"}}
            type="file"
            id="file"
            name="img"
            onChange={(e)=>setvalue((prev)=>({...prev,[e.target.name]:e.target.files[0]}))}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button id="save-draft">Save as a draft</button>
            <button id="publish" onClick={handlepublish}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat test">
            <input
              type="radio"
              name="category"
              value="art"
              id="art" 
              checked={state && state.category==="art"}
              onChange={handlechange}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={state && state.category==="science"}
              name="category"
              value="science"
              id="science"
              onChange={handlechange}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={state && state.category==="technology"}
              name="category"
              value="technology"
              id="technology"
              onChange={handlechange}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={state && state.category==="cinema"}
              name="category"
              value="cinema"
              id="cinema"
              onChange={handlechange}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={state && state.category==="design"}
              name="category"
              value="design"
              id="design"
              onChange={handlechange}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="category"
              value="food"
              id="food"
              checked={state && state.category==="food"}
              onChange={handlechange}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Write;