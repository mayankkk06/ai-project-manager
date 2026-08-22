const Project = require("../models/Project");
const getProjects = async (req, res, next) => {
    try{
        const projects = await Project.find();

        res.status(200).json(projects);
    }catch(error) {
        next(error);
    }
};

const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
    try{
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(project);
    }   catch(error) {
        next(error);
        }
};


const deleteProject = async (req, res, next) => {
    try{
        const project = await Project.findByIdAndDelete(req.params.id);

        res.status(200).json(project);
    } catch(error) {
        next(error);
    }
};
module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};