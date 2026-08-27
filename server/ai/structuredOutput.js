const createStructuredOutput = (tasks) => {
  return {
    projectPlan: {
      tasks,
      generatedBy: "AI",
    },
  };
};

module.exports = createStructuredOutput;