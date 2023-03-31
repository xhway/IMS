const sequelize = require('../config/connection');
const { Shirt, Pants, Shoes, Jacket, Tie, User } = require('../models');

const shirtData = require('./shirtData.json');
const pantsData = require('./pantsData.json');
const shoeData = require('./shoeData.json');
const jacketData = require('./jacketData.json');
const tieData = require('./tieData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const jacket of jacketData) {
    await Jacket.create({
      ...jacket,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const pants of pantsData) {
    await Pants.create({
      ...pants,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const shirt of shirtData) {
    await Shirt.create({
      ...shirt,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const shoes of shoeData) {
    await Shoes.create({
      ...shoes,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const tie of tieData) {
    await Tie.create({
      ...tie,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }



  process.exit(0);
};

seedDatabase();
