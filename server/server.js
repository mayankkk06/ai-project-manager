require("dotenv").config();

const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.send("AI Project Manager Backend is Running");
});

const PORT = process.env.PORT

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});