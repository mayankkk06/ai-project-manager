const createProjectPrompt = (projectDetails) => {
  return `
You are an AI project management assistant.

Analyze this project:
${projectDetails}

Provide clear tasks, priorities, and recommendations.
`;
};

module.exports = createProjectPrompt;