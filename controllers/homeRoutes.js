const router = require('express').Router();
const { Shirt, Pants, Shoes, Jacket, Tie } = require('../models');
const withAuth = require('../utils/auth');

router.get('/shirts', async (req, res) => {
    try {
        const shirtData = await Shirt.findAll();
        const shirts = shirtData.map((shirt) => shirt.get({plain: true}));
        res.render('report', {
            shirts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
