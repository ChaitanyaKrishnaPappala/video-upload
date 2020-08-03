const express = require('express')
const router = express.Router()
const controller = require('../controller')

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

router.get('/watch/:id', (req, res) => controller.retrieveVideo(req, res))

module.exports = router
