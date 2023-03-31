const router = require('express').Router();
const { Shirt, Pants, Shoes, Jacket, Tie } = require('../models');
const withAuth = require('../utils/auth');

router.get('/shirts', async (req, res) => {
  try {
    const shirtData = await Shirt.findAll();
    const shirts = shirtData.map((shirt) => shirt.get({ plain: true }));
    res.render('products/shirts/index', {
      shirts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/shirts/create', async (req, res) => {
  try {
    res.render('products/shirts/create', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/shirts/:sku/edit', async (req, res) => {
  const shirt = await Shirt.findOne({
    where: {
      sku: req.params.sku,
    },
  });

  console.log(shirt.get({ plain: true }));

  try {
    res.render('products/shirts/create', {
      shirt: shirt.get({ plain: true }),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/jackets', async (req, res) => {
  try {
    const jacketData = await Jacket.findAll();
    const jackets = jacketData.map((jacket) => jacket.get({ plain: true }));

    res.render('products/jackets/index', {
      jackets,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/jackets/create', async (req, res) => {
  try {
    res.render('products/jackets/create', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/jackets/:sku/edit', async (req, res) => {
  const jacket = await Jacket.findOne({
    where: {
      sku: req.params.sku,
    },
  });

  try {
    res.render('products/jackets/create', {
      jacket: jacket.get({ plain: true }),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pants', async (req, res) => {
  try {
    const pantsData = await Pants.findAll();
    const pants = pantsData.map((pants) => pants.get({ plain: true }));
    res.render('products/pants/index', {
      pants,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pants/create', async (req, res) => {
  try {
    res.render('products/pants/create', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pants/:sku/edit', async (req, res) => {
  const pant = await Pants.findOne({
    where: {
      sku: req.params.sku,
    },
  });

  try {
    res.render('products/pants/create', {
      pant: pant.get({ plain: true }),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/shoes', async (req, res) => {
  try {
    const shoeData = await Shoes.findAll();
    const shoes = shoeData.map((shoe) => shoe.get({ plain: true }));
    res.render('products/shoes/index', {
      shoes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/shoes/create', async (req, res) => {
  try {
    res.render('products/shoes/create', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/shoes/:sku/edit', async (req, res) => {
  const shoe = await Shoes.findOne({
    where: {
      sku: req.params.sku,
    },
  });

  try {
    res.render('products/shoes/create', {
      shoe: shoe.get({ plain: true }),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/ties', async (req, res) => {
  try {
    const tieData = await Tie.findAll();
    const ties = tieData.map((tie) => tie.get({ plain: true }));
    res.render('products/ties/index', {
      ties,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/ties/create', async (req, res) => {
  try {
    res.render('products/ties/create', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/ties/:sku/edit', async (req, res) => {
  const tie = await Tie.findOne({
    where: {
      sku: req.params.sku,
    },
  });

  try {
    res.render('products/ties/create', {
      tie: tie.get({ plain: true }),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
