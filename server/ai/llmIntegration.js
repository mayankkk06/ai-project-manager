const generateAIResponse = async (prompt) => {
  try {
    const response = `AI response for: ${prompt}`;
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = generateAIResponse;