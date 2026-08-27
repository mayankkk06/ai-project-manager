const detectPromptInjection = (input) => {
  const blockedPatterns = [
    "ignore previous instructions",
    "reveal system prompt",
    "ignore all rules",
  ];

  const lowerInput = input.toLowerCase();

  return blockedPatterns.some((pattern) =>
    lowerInput.includes(pattern)
  );
};

const securePrompt = (userInput) => {
  if (detectPromptInjection(userInput)) {
    throw new Error("Unsafe prompt detected");
  }

  return userInput;
};

module.exports = {
  detectPromptInjection,
  securePrompt,
};