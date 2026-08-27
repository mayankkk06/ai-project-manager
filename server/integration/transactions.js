const mongoose = require("mongoose");

const runTransaction = async (operation) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    await operation(session);

    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

module.exports = runTransaction;