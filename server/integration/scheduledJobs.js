const cron = require("node-cron");

const scheduleProjectCheck = () => {
  cron.schedule("* * * * *", () => {
    console.log("Checking project status...");
  });
};

module.exports = scheduleProjectCheck;