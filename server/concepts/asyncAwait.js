const fetchProject = async () => {
  try {
    const project = await Promise.resolve("AI Project Manager");
    console.log(project);
  } catch (error) {
    console.error(error);
  }
};

fetchProject();