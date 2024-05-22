import mysql from "mysql2"
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Aa05102001@",
    database:"blogapp"
})
export default db