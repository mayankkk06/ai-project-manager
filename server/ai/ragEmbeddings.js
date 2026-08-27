const documents = [
  "Project planning and task management",
  "AI helps generate project recommendations",
];

const retrieveRelevantDocuments = (query) => {
  return documents.filter((document) =>
    document.toLowerCase().includes(query.toLowerCase())
  );
};

const generateRAGResponse = (query) => {
  const context = retrieveRelevantDocuments(query);

  return {
    query,
    retrievedContext: context,
    response: `AI response based on retrieved context`,
  };
};

module.exports = {
  retrieveRelevantDocuments,
  generateRAGResponse,
};