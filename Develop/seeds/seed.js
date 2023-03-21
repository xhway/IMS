const sequelize = require('../config/connection');
const { Shirt, Pants, Shoes, Jacket, Tie } = require('../models');

const shirtData = require('./shirtData.json');
const pantsData = require('./pantsData.json');
const shoeData = require('./userData.json');
const jacketData = require('./userData.json');
const tieData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
