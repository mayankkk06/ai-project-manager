// Embedding vs Referencing Relationships

// EMBEDDING EXAMPLE
const embeddedProject = {
  title: "AI Project Manager",
  tasks: [
    {
      title: "Create Backend",
      status: "completed"
    },
    {
      title: "Build Frontend",
      status: "pending"
    }
  ]
};

// REFERENCING EXAMPLE

const taskSchema = {
  title: "Create Backend",
  projectId: "Project ObjectId"
};

module.exports = {
  embeddedProject,
  taskSchema
};