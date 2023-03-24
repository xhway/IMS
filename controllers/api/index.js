const router = require('express').Router();
const pantsRoutes = require('./pantsRoutes');
const jacketRoutes = require('./jacketRoutes');
const shirtRoutes = require('./shirtRoutes');
const tieRoutes = require('./tieRoutes');
const shoeRoutes = require('./shoeRoutes');


router.use('/pants', pantsRoutes);
router.use('/jackets', jacketRoutes);
router.use('/shirts', shirtRoutes);
router.use('/shoes', shoeRoutes);
router.use('/tie', tieRoutes);


module.exports = router;
