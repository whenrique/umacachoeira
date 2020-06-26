const express = require('express')
require('dotenv').config()
const axios = require('axios')
const path = require('path')
const cors = require('cors')
const app = express()

const { 
  UNSPLASH_ACCESS_KEY: access_key
} = process.env

app.use(cors())
app.use('/', express.static(path.resolve(__dirname, '..', 'build')))

app.get('/waterfall', async (req, res) => {
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

app.listen(process.env.PORT || 3001)