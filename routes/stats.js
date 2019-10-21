const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:playerID', async (req, res) => {
  try {
    const headers = {
      'Authorization': `Bearer ${process.env.TRACKER_API_KEY}`,
      'Accept': 'application/vnd.api+json',
    }

    const playerID = req.params.playerID;
    const url = `${process.env.TRACKER_API_URL}/players/${playerID}/seasons/lifetime`;
    const response = await fetch(url, {
      headers
    })

    const data = await response.json();

    res.json(data.data.attributes.gameModeStats);
  } catch (err) {
    res.status(404).json({
      message: 'Player stats is not found'
    })
  }
})

module.exports = router