require('dotenv').config()
const path = require('path')
const fs = require('fs')
const {addVideo} = require('./db/postgres/dao')
const {formatting, getFileExtension} = require('./utils')

const VIDEO_FOLDER_PATH = 'public/videos/'
const INITIAL_VIDEO_PATH = path.join(__dirname, '../')

if (process.argv.length >= 4) {
  const title = process.argv[2]
  const folderPath = process.argv[3]
  if (!title) {
    throw new Error('Invalid file')
  } else if (!folderPath) {
    throw new Error('Invalid source path')
  }

  // add entry to db
  addVideo(title).then((id) => {
    const dir = `${INITIAL_VIDEO_PATH}${VIDEO_FOLDER_PATH}${id}`
    const fileExtension = getFileExtension(folderPath)
    // sanity checks
    if (!fileExtension) {
      throw new Error('Invalid file extension')
    }
    // create unique director for id (to store files)
    const newFilePath = `${dir}/${title}${fileExtension}`
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }

    // copy file from source to unique id folder
    fs.copyFile(folderPath, newFilePath, (err, success) => {
      if (err) {
        throw new Error(`Failed to copy file from source, ${err.toString()}`)
      } else {
        // convert video to 240p, 480p, 1080p, 4k videos
        formatting(newFilePath, fileExtension, (err, {message, data}) => {
          if (err) {
            throw new Error(`Failed to format file, ${err.toString()}`)
          } else {
            data.forEach((item) => {
              const videoPath = `${__dirname}/${item}`
              const newVideoPath = `${INITIAL_VIDEO_PATH}${VIDEO_FOLDER_PATH}${id}/${item}`
              fs.rename(videoPath, newVideoPath, function (err, resp) {
                if (err) {
                  throw new Error(`Failed to format file, ${err.toString()}`)
                }
              })
            })
          }
        })
      }
    })
  }).catch((err) => {
    throw new Error(`Failed to store the file, ${err.toString()}`)
  })
} else {
  throw new Error('Provide title and path of the video')
}
