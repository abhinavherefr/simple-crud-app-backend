const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js')
const app = express();
const productRoute = require('./routes/product.route.js')

// MIDDLEWARES
app.use(express.json()); //This is the middleware to parse JSON bodies, that is, it converts the incoming JSON into JavaScript objects...
app.use(express.urlencoded({extended: false})); //This is the middleware to parse URL-encoded bodies, that is, it converts the incoming URL-encoded data into JavaScript objects...



//ROUTES
app.use("/api/products", productRoute)



app.get("/", (req, res) => {
  // WAY TO HANDLE GET REQUEST, INITIAL PAGE LOAD
  res.send("Hello from the NODE API knock knock nigga ");
});



mongoose
  .connect(
    "mongodb+srv://abhinavfor2022_db_user:iuewcoK4JzNWCwxy@cluster0.3aykdvs.mongodb.net/Node-API?appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");

    app.listen(3000, () => {
      // WAY TO START BACKEND SERVER
      console.log("Starting server on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
