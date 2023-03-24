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

router.get('/jackets', async (req, res) => {
    try {
        const jacketData = await Jacket.findAll();
        const jacket = jacketData.map((jacket) => jacket.get({plain: true}));
        res.render('report', {
            jacket,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/pants', async (req, res) => {
    try {
        const pantsData = await Pants.findAll();
        const pants = pantsData.map((pants) => pants.get({plain: true}));
        res.render('report', {
            pants,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/shoes', async (req, res) => {
    try {
        const shoeData = await Shoes.findAll();
        const shoe = shoeData.map((shoe) => shoe.get({plain: true}));
        res.render('report', {
            shoe,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/tie', async (req, res) => {
    try {
        const tieData = await Tie.findAll();
        const tie = tieData.map((tie) => tie.get({plain: true}));
        res.render('report', {
            tie,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
