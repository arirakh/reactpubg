const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:playerName', async (req, res) => {
  try {
    const headers = {
      'Authorization': `Bearer ${process.env.TRACKER_API_KEY}`,
      'Accept': 'application/vnd.api+json',
    }

    // GET PLAYER ID
    const playerName = req.params.playerName;
    const urlPlayerName = `${process.env.TRACKER_API_URL}/players?filter[playerNames]=${playerName}`;
    const responsePlayerName = await fetch(urlPlayerName, {
      headers
    })

    const dataPlayerName = await responsePlayerName.json();

    if (dataPlayerName.errors && dataPlayerName.errors.length) {
      res.status(404).json({
        message: 'Player not found'
      })
    } else {
      try {
        let playerInfo = {
          id: dataPlayerName.data[0].id,
          name: dataPlayerName.data[0].attributes.name
        };

        // GET PLAYER STATS
        const playerID = playerInfo.id;
        const urlPlayerStats = `${process.env.TRACKER_API_URL}/players/${playerID}/seasons/lifetime`;
        const responsePlayerStats = await fetch(urlPlayerStats, {
          headers
        })

        const dataPlayerStats = await responsePlayerStats.json();
        const playerStats = dataPlayerStats.data.attributes.gameModeStats;

        res.json({ playerInfo, playerStats })
      } catch (err) {
        res.status(500).json({
          code: '02',
          message: 'Server error'
        })
      }
    }
  } catch (err) {
    res.status(500).json({
      code: '01',
      message: 'Server error'
    })
  }
})

module.exports = router;