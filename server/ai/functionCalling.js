const tools = {
  getProjectStatus: (project) => {
    return `Project ${project.title} is ${project.status}`;
  },

  createTask: (title) => {
    return {
      title,
      status: "pending",
    };
  },
};

module.exports = tools;