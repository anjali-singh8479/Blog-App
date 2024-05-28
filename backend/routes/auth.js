import express from "express"
import {register,login,logout} from "../controllers/auth.js"
import multer from "multer"
import path from "path"
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/profilespics")
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+path.extname(file.originalname))
    }
})
const upload=multer({storage:storage})
const router=express.Router();
router.post("/register",upload.single("img"),register)
router.post("/login",login)
router.get("/logout",logout)
export default router