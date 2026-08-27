const evaluationSet = [
  {
    input: "Create tasks for a web application",
    expectedOutput: "A structured list of development tasks",
  },
  {
    input: "Set project priority",
    expectedOutput: "A valid priority recommendation",
  },
];

const evaluateLLM = (actualOutput, expectedOutput) => {
  return actualOutput.includes(expectedOutput);
};

module.exports = {
  evaluationSet,
  evaluateLLM,
};