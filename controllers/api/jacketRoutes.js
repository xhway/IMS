const router = require('express').Router();
const { Jacket } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newJacket = await Jacket.create({
            ...req.body
        });
        res.status(200).json(newJacket);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:sku', withAuth, async (req, res) => {
    try {
        const jacketData = await Jacket.destroy({
            where: {
                sku: req.params.sku,
            },
        });
        if (!jacketData) {
            res.status(404).json({ message: 'No item found with that sku' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:sku', withAuth, async (req, res) => {
    try {
        const jacketData = await Jacket.update({
            where: {
                sku: req.params.sku,
            },
        });
        if (!jacketData) {
            res.status(404).json({ message: 'No item found with that sku' });
        }
    } catch (err) {
        res.status(500).json(err);
    }

});