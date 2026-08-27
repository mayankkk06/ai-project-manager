const sanitizeInput = (input) => {
  if (typeof input !== "string") {
    return input;
  }

  return input
    .replace(/</g, "")
    .replace(/>/g, "")
    .trim();
};

module.exports = sanitizeInput;