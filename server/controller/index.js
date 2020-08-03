const path = require('path')
const fs = require('fs')
const {getVideoTitle} = require('../db/postgres/dao')

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

const ASSETS_FOLDER = 'public'
const VIDEO_FOLDER = 'videos'
const RETRIEVAL_VIDEO_PATH = path.join(__dirname, '../../')

const retrieveVideo = async function (req, res) {
  if (!req.params.id) {
    res.status(400).json({message: `No video found with id, ${req.params.id}`})
  } else {
    getVideoTitle(req.params.id).then((success) => {
      const dir = `${RETRIEVAL_VIDEO_PATH}${ASSETS_FOLDER}/${VIDEO_FOLDER}/${req.params.id}`
      fs.readdir(dir, (err, files) => {
        if (err) {
          res.status(500).json({message: `Failed to retrieve video, ${err.toString()}`})
        } else {
          const mapper = {'4k': '', '240p': '', '480p': '', '1080p': ''}
          Object.keys((mapper)).forEach((key) => {
            if (key) {
              const match = files.find((file) => file.includes(`-${key}.`))
              if (match) {
                mapper[key] = `/${VIDEO_FOLDER}/${req.params.id}/${match}`
              }
            }
          })
          res.json({message: 'files processing', files: mapper})
        }
      })
    }).catch((ex) => {
      res.status(500).json({message: `Failed to retrieve video, ${ex.toString()}`})
    })
  }
}

module.exports = {retrieveVideo}
