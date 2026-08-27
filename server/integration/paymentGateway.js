const processPayment = async (amount) => {
  if (!amount || amount <= 0) {
    throw new Error("Invalid payment amount");
  }

  return {
    success: true,
    amount,
    transactionId: `txn_${Date.now()}`,
  };
};

module.exports = processPayment;