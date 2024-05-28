import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Edit from "../img/delete.png"
import  Delete from "../img/edit.png"
import Menu from '../components/Menu'
import axios from 'axios'
import moment from "moment"
import { AuthContext } from '../context/authContext'
const Single = () => {
    const navigate=useNavigate()
    console.log(useLocation().pathname.split("/")[2])
    const postid=useLocation().pathname.split("/")[2]
    const{currentuser}=useContext(AuthContext)
    const[post,setpost]=useState({})
    const handledelete=async()=>{
        try{
            console.log("deleted")
          const res=await axios.delete(`http://localhost:8800/post/${postid}`)
          if(res.data==="post deleted")
            navigate("/home")
         console.log(res.data)
          return res.data
        }catch(err){
            return err
        }
    }
    useEffect(()=>{
        const getpost=async()=>{
            try{
                const res=await axios.get(`http://localhost:8800/post/${postid}`)
               setpost(res.data[0])
               console.log("post", post)
             }catch(err){
                 return err
             }
        }
        getpost()
    },[postid])
    const gettext=(html)=>{
        const doc=new DOMParser().parseFromString(html,"text/html")
        return doc.body.textContent;
      }
  return (
    <>
    <div className="single">
        <div className="content">
            <img src={`http://localhost:8800/uploads/${post.img}`} alt=""></img>
            <div className='user-wrapper'>
            <div className='user'>
                <img src={`http://localhost:8800/profilespics/${currentuser.img}`} alt=''></img>
                <div className='info'>
                    <span>{post.username}</span>
                    <p>Posted {moment(post.createdAt).fromNow()}</p>
                </div>
            </div>
            {/* {post.username===currentuser.username &&  */}
            <div className='edit'>
            <Link onClick={handledelete}>
            <img src={Edit} alt=''></img>
            </Link>
            <Link to= {`/write/${post.id}`} state={post}>
            <img src={Delete} alt='' ></img>
            </Link>
        </div> 
            {/* } */}
            </div>
            <span>{post.title}</span>
            <p>
                {gettext(post.desc)}
            </p>
        </div>
        <div className="menu">
            <Menu category={post.category}></Menu>
        </div>
    </div>
    </>
  )
}

export default Single