const router = require('express').Router();

const apiRoutes = require('./api');
const productsRoutes = require('./productsRoutes');
const homeRoutes = require('./homeRoutes')

router.use('/products', productsRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes)

module.exports = router;
