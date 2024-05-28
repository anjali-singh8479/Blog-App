import axios from "axios";
import { createContext, useEffect, useState } from "react";
export  const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
const [currentuser,setcurrentuser]=useState(JSON.parse(localStorage.getItem("user")))
const login=async(inputs)=>{
const res=await axios.post("http://localhost:8800/auth/login",inputs,{withCredentials:true})
setcurrentuser(res.data)
return res
}
const logout=async()=>{
    const res=await axios.get("http://localhost:8800/auth/logout")
    setcurrentuser(null)
    return res
    }

    useEffect(()=>{
    localStorage.setItem("bloguser",JSON.stringify(currentuser))
    },[currentuser])
    return(
            <AuthContext.Provider value={{currentuser,login,logout}}>{children}</AuthContext.Provider>
        )
}