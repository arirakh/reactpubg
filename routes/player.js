const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:playerName', async (req, res) => {
  try {
    const headers = {
      'Authorization': `Bearer ${process.env.TRACKER_API_KEY}`,
      'Accept': 'application/vnd.api+json',
    }

    const playerName = req.params.playerName;
    const url = `${process.env.TRACKER_API_URL}/players?filter[playerNames]=${playerName}`;
    const response = await fetch(url, {
      headers
    })

    const data = await response.json();

    if (data.errors && data.errors.length) {
      res.status(404).json({
        message: 'Player not found'
      })
    } else {
      try {
        const playerID = data.data[0].id;

        const url = `${process.env.TRACKER_API_URL}/players/${playerID}`;
        const response = await fetch(url, {
          headers
        })

        const player = await response.json();

        res.json(player)
      } catch (err) {
        res.status(500).json({
          message: 'Server error'
        })
      }
    }
  } catch (err) {
    res.status(500).json({
      message: 'Server error'
    })
  }
})

module.exports = router;