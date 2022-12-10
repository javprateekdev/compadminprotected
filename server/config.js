const mysql = require("mysql");

const connection= mysql.createConnection({
    host: "housethat.in",
    user: "u901480788_housethat",
    password: "Housethat@b34",
    database: "u901480788_users",
});

connection.connect((err)=>{
    if(err)
    {
        console.warn("error in connection")
    }
});

module.exports =connection;