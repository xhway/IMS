const express = require('express');
const router = express.Router();

const Pants = require('../models/Pants');

router.get('/', async (req, res) => {
  try {
    const pants = await Pants.find();
    res.json(shirts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
