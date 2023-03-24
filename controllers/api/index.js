const express = require('express');
const router = express.Router();

const shirtRoutes = require('./shirtRoutes');
const pantsRoutes = require('./pantsRoutes');
const shoesRoutes = require('./shoesRoutes');

router.use('/shirts', shirtRoutes);
router.use('/pants', pantsRoutes);
router.use('/shoes', shoesRoutes);

module.exports = router;

