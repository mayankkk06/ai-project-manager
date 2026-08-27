const Project = require("./Project");

// Aggregation Pipeline Example
const getProjectStatistics = async () => {
  const statistics = await Project.aggregate([
    {
      $group: {
        _id: "$status",
        totalProjects: { $sum: 1 }
      }
    }
  ]);

  return statistics;
};

module.exports = getProjectStatistics;