const router = require('express').Router();

const { route } = require('./jacketRoutes');
const jacketRoutes = require('./jacketRoutes');
const pantsRoutes = require('./pantsRoutes');
const shirtRoutes = require('./shirtRoutes');
const shoesRoutes = require('./shoeRoutes');
const tieRoutes = require('./tieRoutes');

const userRoutes = require('./userRoutes');

router.use('/jacket', jacketRoutes);
router.use('/pants', pantsRoutes);
router.use('/shirts', shirtRoutes);
router.use('/shoes', shoesRoutes);
router.use('/ties', tieRoutes);
router.use('/users', userRoutes);

module.exports = router;
