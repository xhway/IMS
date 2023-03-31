const router = require('express').Router();
const { Pants } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPants = await Pants.create({
      ...req.body,
    });
    res.status(200).json(newPants);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:sku', withAuth, async (req, res) => {
  try {
    const pantsData = await Pants.destroy({
      where: {
        sku: req.params.sku,
      },
    });
    if (!pantsData) {
      res.status(404).json({ message: 'No item found with that sku' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:sku', withAuth, async (req, res) => {
  try {
    const pantsData = await Pants.update(req.body, {
      where: {
        sku: req.params.sku,
      },
    });
    if (!pantsData) {
      res.status(404).json({ message: 'No item found with that sku' });
    }
    res.status(200).json(pantsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
