import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express();
app.use(express.json())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Creditionals",true)
    next()
})
app.use(cors(
    {
        origin:["http://localhost:3000"],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
    }
))
app.use(express.static("public"))
app.use(cookieParser())
app.use("/post",postRoutes)

app.use("/auth",authRoutes)
app.use("/user",userRoutes)

app.listen("8800",()=>{
    console.log("backend connected");
})