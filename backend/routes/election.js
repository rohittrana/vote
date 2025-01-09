const express = require('express');
const Election = require('../models/Election');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create Election (Admin Only)
router.post('/create', authMiddleware, async (req, res) => {
  const { title, candidates } = req.body;

  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied' });
  }

  try {
    const election = new Election({ title, candidates, createdBy: req.user.id });
    await election.save();
    res.status(201).json(election);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Vote
router.post('/vote/:id', authMiddleware, async (req, res) => {
  const { candidateIndex } = req.body;
  try {
    const election = await Election.findById(req.params.id);

    if (!election || !election.isActive) {
      return res.status(400).json({ msg: 'Election not active or not found' });
    }

    election.candidates[candidateIndex].voteCount += 1;

    // TODO: Integrate blockchain here

    await election.save();
    res.json({ msg: 'Vote successfully cast' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
