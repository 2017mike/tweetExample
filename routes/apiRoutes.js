const express = require("express");
const router = express.Router()
const getTweet = require('../api')


//get single tweet
router.get('/tweet', async(req, res) => {
  const tweet =  await getTweet()
  res.json(tweet)
})

module.exports = router