const express = require("express");

const cors = require("cors");
const connection = require("./config");
const app = express();
 
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.post('/login', (req, res) => {
 const username = req.body.username;
 const password = req.body.password;
 
 connection.query(
     "SELECT * FROM users WHERE username = ? AND password = ?",
     [username, password],
     (err, result)=> {
         if (err) {
             res.send({err: err});
         }
 
         if (result.length > 0) {
             res.send( result);
             }else({message: "Wrong username/password comination!"});
         }
     
 );
});
 
app.listen(8000, () => {
    console.log("running server");
});
