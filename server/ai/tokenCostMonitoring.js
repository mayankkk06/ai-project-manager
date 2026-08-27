const calculateTokenCost = (inputTokens, outputTokens) => {
  const inputCost = inputTokens * 0.000001;
  const outputCost = outputTokens * 0.000002;

  return {
    inputTokens,
    outputTokens,
    totalTokens: inputTokens + outputTokens,
    estimatedCost: inputCost + outputCost,
  };
};

module.exports = calculateTokenCost;