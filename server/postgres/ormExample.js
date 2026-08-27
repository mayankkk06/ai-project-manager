const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getProjects = async () => {
  return await prisma.project.findMany();
};

module.exports = getProjects;