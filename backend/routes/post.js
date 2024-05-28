import express from "express"
import multer from "multer";
import path from "path"
import {allpost,getpost,createpost,updatepost,deletepost} from "../controllers/post.js"

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+ Date.now()+ "_"+path.extname(file.originalname))
    }
})

const upload = multer({ storage:storage})
const router=express.Router();
router.get("/all",allpost)
router.get("/:id",getpost)
router.post("/create",upload.single("img"),createpost)
router.put("/:id",updatepost)
router.delete("/:id",deletepost)
export default router