const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    res.render('homepage', {
        logged_in: req.session.logged_in
    })
});

router.get('/create', async (req, res) => {
    res.render('newForm', {
        logged_in: req.session.logged_in
    })
});

router.get('/read', async (req, res) => {
    res.render('checkinventory', {
        logged_in: req.session.logged_in
    })
});

router.get('/update', async (req, res) => {
    res.render('updateInventory', {
        logged_in: req.session.logged_in
    })
});

router.get('/delete', async (req, res) => {
    res.render('discontinueItem', {
        logged_in: req.session.logged_in
    })
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });