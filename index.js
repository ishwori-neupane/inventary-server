const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const itemRouter = require("./routes/item");
// const dbURL = "mongodb://localhost:27017/billing";
// const connRef = mongoose.connection;
// connRef.on("open", () => {
//     console.log("connected")
// })
const connectionRef = mongoose.connection;

connectionRef.on("open", () => {
  console.log("Connection open");
});
// app.use(express.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) =>{
    console.log(err,"db err");
})

const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    res.send("hello world.");
})
app.get("/api/item", (req, res) => {
    
})
app.use("/api/item", itemRouter);

app.post("/", (req, res) => {
    
})

app.listen(process.env.PORT, () => {
    console.log(`listening at port 4000`)
})