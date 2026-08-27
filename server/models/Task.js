const mongoose = require("mongoose");
const Project = require("./Project");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;