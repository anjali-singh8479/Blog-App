import db from "../connect.js";
import jwt from "jsonwebtoken"
export const allpost=(req,res)=>{
    const q=req.query.cat?"SELECT * from posts WHERE category=?":"SELECT * FROM posts"
    console.log(req.query.cat)
    db.query(q,[req.query.cat],(err,data)=>{
        if(err)
            res.json(err).status(500)
        res.json(data).status(200)
    })
}
export const getpost=(req,res)=>{
    const q="SELECT * from posts WHERE id=?"
    db.query(q,[req.params.id],(err,data)=>{
        if(err)
            return res.json(err).status(500)
        return res.json(data).status(200)
    })
}
export const createpost=(req,res)=>{
    console.log("inside create")
    const q="INSERT INTO posts(`title`,`desc`,`category`,`img`,`userid`,`createdAt`) VALUES(?)"
    const values=[req.body.title,req.body.desc,req.body.category,req.file.filename,req.body.userid,new Date()]
    db.query(q,[values],(err,data)=>{
        if(err)
            return res.json(err).status(500)
        return res.json("post created").status(200)
    })
}
export const updatepost=(req,res)=>{
    const token=req.cookies.token
    console.log(token)
    if(!token)
        return res.json("Not authenticated").status(401)
    jwt.verify(token,"secret-key",(err,userinfo)=>{
        if(err)
            return res.json(err).status(500)
        if(!userinfo)
            return res.json("Invalid token").status(403)
        console.log("userinfo",userinfo)
        const q="UPDATE posts SET `title`=?,`desc`=?,`category`=? WHERE id=? AND userid= ? "
        const values=[req.body.title,req.body.desc,req.body.category]
        db.query(q,[...values,req.params.id,userinfo],(err,data)=>{
            if(err)
                return res.json(err).status(403)
            return res.json(data).status(200)
        })
    })
}
export const deletepost=(req,res)=>{
    const token=req.cookies.token
    console.log(token)
    if(!token)
        return res.json("Not authenticated").status(401)
    jwt.verify(token,"secret-key",(err,userinfo)=>{
        if(err)
            return res.json(err).status(500)
        if(!userinfo)
            return res.json("Invalid token").status(403)
        console.log("userinfo",userinfo)
        const q=`DELETE FROM posts WHERE id=? AND userid=${userinfo}`
        const values=[req.params.id]
        db.query(q,[values],(err,data)=>{
            if(err)
                return res.json(err).status(403)
            return res.json("post deleted").status(200)
        })
    })
}