const request = require("supertest");

const testApi = async (app) => {
  const response = await request(app).get("/api/projects");

  return response.status === 200;
};

module.exports = testApi;