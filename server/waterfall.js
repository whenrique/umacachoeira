require('@babel/polyfill/noConflict')
require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const axios = require('axios')
const cors = require('cors')
const app = express()

const { 
  UNSPLASH_ACCESS_KEY: access_key
} = process.env

app.use(cors())

app.get('/.netlify/functions/waterfall', async (req, res) => {
  try {
    const { data, status } = await axios.get('https://api.unsplash.com/photos/random/?query=waterfall', {
      headers: {
        'Authorization': `Client-ID ${access_key}`
      }
    })

    if (status !== 200) throw new Error('/shrug')
  
    const { alt_description, urls, links, user, exif } = data
  
    res.status(200).json({
      alt_description,
      urls,
      links,
      user,
      exif
    })
  } catch (error) {
    return error
  }
})

module.exports.handler = serverless(app)