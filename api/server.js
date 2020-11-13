const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");
const cors = require('cors')

const app = express();
app.use(cors()) 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/", todoRoutes)

const headers = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  };
  
  app.use(headers);

app.listen(9000, () => {
    console.log("Backend running at port 9000")
})