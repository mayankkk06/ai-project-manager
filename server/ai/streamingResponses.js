const streamResponse = async (text, onChunk) => {
  const words = text.split(" ");

  for (const word of words) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    onChunk(word);
  }
};

module.exports = streamResponse;