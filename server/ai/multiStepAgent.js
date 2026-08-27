const planTask = (goal) => {
  return `Plan created for: ${goal}`;
};

const executeTask = (plan) => {
  return `Executing: ${plan}`;
};

const reviewResult = (result) => {
  return `Reviewed result: ${result}`;
};

const runAgent = async (goal) => {
  const plan = planTask(goal);
  const result = executeTask(plan);
  const review = reviewResult(result);

  return {
    plan,
    result,
    review,
  };
};

module.exports = runAgent;