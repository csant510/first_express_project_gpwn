const port = 3000,
    express = require("express"),
    app = express();

    app.get("/", (req,res) =>{
        res.send("hello I like food!")
    })
    .listen(port, ()=>{
        console.log(`The Express.js server has been started and is listening on port number: ${port}`);
    });