import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express();
app.use(express.json())
app.use(cors())
app.use("/auth",authRoutes)
app.use("/user",userRoutes)
app.use("/post",postRoutes)
app.use(cookieParser())
app.listen("8800",()=>{
    console.log("backend connected");
})