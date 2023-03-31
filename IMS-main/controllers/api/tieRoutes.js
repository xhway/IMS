const router = require('express').Router();
const { Tie } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTie = await Tie.create({
      ...req.body,
    });
    res.status(200).json(newTie);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:sku', withAuth, async (req, res) => {
  try {
    const tieData = await Tie.destroy({
      where: {
        sku: req.params.sku,
      },
    });
    if (!tieData) {
      res.status(404).json({ message: 'No item found with that sku' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:sku', withAuth, async (req, res) => {
  try {
    const tieData = await Tie.update(req.body, {
      where: {
        sku: req.params.sku,
      },
    });
    if (!tieData) {
      res.status(404).json({ message: 'No item found with that sku' });
    }
    res.status(200).json(tieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
