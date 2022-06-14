const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

mongoose.connect(mongodb+srv://<username>:<password>@mern-learnit.wmiwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority,()=>{
  console.log("Connect success!");
}

)
app.use(cors())
app.use(cookieParser());
app.use(express.json())


app.listen(8000, () => {
  console.log("Server is running");
});







































