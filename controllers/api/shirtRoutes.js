const router = require('express').Router();
const { Shirt } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newShirt = await Shirt.create({
      ...req.body,
    });
    res.status(200).json(newShirt);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:sku', withAuth, async (req, res) => {
  try {
    const shirtData = await Shirt.destroy({
      where: {
        sku: req.params.sku,
      },
    });
    if (!shirtData) {
      res.status(404).json({ message: 'No item found with that sku' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:sku', withAuth, async (req, res) => {
  try {
    const shirtData = await Shirt.update(req.body, {
      where: {
        sku: req.params.sku,
      },
    });
    if (!shirtData) {
      res.status(404).json({ message: 'No item found with that sku' });
    }
    res.status(200).json(shirtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
