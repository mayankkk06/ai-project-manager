require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(express.json());
app.use("/api/projects", projectRoutes);
app.use(errorHandler);

app.get("/",(req,res) => {
    res.send("AI Project Manager Backend is Running");
});

const PORT = process.env.PORT
connectDB();
app.listen(5001, () => {
    console.log("Server is running on port 5001");
});