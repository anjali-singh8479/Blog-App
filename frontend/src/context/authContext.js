import axios from "axios";
import { createContext, useEffect, useState } from "react";
export  const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
const [currentuser,setcurrentuser]=useState(JSON.parse(localStorage.getItem("user") || null))
const login=async(inputs)=>{
const res=await axios.post("http://localhost:8800/auth/login",inputs)
setcurrentuser(res.data.others)
}
const logout=async(inputs)=>{
    const res=await axios.get("http://localhost:8800/auth/logout",inputs)
    console.log(res)
    setcurrentuser(null)
    }

    useEffect(()=>{
    localStorage.setItem("bloguser",JSON.stringify(currentuser))
    },[currentuser])
    return(
            <AuthContext.Provider value={{currentuser,login,logout}}>{children}</AuthContext.Provider>
        )
}