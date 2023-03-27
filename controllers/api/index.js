const express = require('express');
const router = express.Router();

const jacketRoutes = require('./jacketRoutes');
const pantsRoutes = require('./pantsRoutes');
const shirtRoutes = require('./shirtRoutes');
const shoesRoutes = require('./shoesRoutes');
const tieRoutes = require('./tieRoutes');

router.use('/jacket', jacketRoutes);
router.use('/pants', pantsRoutes);
router.use('/shirts', shirtRoutes);
router.use('/shoes', shoesRoutes);
router.use('/tie', tieRoutes);


module.exports = router;

