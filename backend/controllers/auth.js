import db from "../connect.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const register=(req,res)=>{
    const q1="select * from users where email=? OR username=?"
    db.query(q1,[req.body.email,req.body.username],(err,data)=>{
        if(err)
            return res.json(err).status(409)
        if(data.length>0)
            return res.json("Email or username already registered").status(401)
        const salt=10;
        bcrypt.hash(req.body.password,salt,(err,hash)=>{
            if(err)
                return res.json(err).status(500)
        const q="INSERT INTO users(`username`,`email`,`img`,`password`) VALUES(?)"
        console.log(q)
        const values=[req.body.username,req.body.email,req.file.filename,hash]
        db.query(q,[values],(err,data)=>{
       if(err)
        return res.json(err).status(400)
    return res.json("registered").status(200)
       })
        })
        
    })
}
export const login=(req,res)=>{
    const q="SELECT * FROM users WHERE username=?"
    db.query(q,[req.body.username],(err,data)=>{
        if(err)
            return res.json(err).status(400)
        console.log(data.length)
        if(data.length<=0)
            return res.json("Invalid username").status(401)
        bcrypt.compare(req.body.password.toString(),data[0].password,(err,response)=>{
            if(err)
                return res.json(err).status(500)
            if(!response)
                return res.json("Incorrect password").status(401)
            const token=jwt.sign(data[0].id,"secret-key")
            console.log("token",token)
            const{password,...others}=data[0]
            res.cookie("token",token)
            return res.json({...others,"message":"logged in"}).status(200)
        })
    })
}
export const logout=(req,res)=>{
    res.clearCookie("token")
    res.json("Logged Out").status(200)
}