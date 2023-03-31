const router = require('express').Router();
const { Shoes } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newShoe = await Shoes.create({
      ...req.body,
    });
    res.status(200).json(newShoe);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:sku', withAuth, async (req, res) => {
  try {
    const shoeData = await Shoes.destroy({
      where: {
        sku: req.params.sku,
      },
    });
    if (!shoeData) {
      res.status(404).json({ message: 'No item found with that sku' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:sku', withAuth, async (req, res) => {
  try {
    const shoeData = await Shoes.update(req.body, {
      where: {
        sku: req.params.sku,
      },
    });
    if (!shoeData) {
      res.status(404).json({ message: 'No item found with that sku' });
    }
    res.status(200).json(shoeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
