const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,

  teamMembers: [
    {
      name: String,
      role: String,
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;