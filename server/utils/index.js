const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

function baseName (str) {
  var base = str.substring(str.lastIndexOf('/') + 1)

  if (base.lastIndexOf('.') !== -1) {
    base = base.substring(0, base.lastIndexOf('.'))
  }

  return base
}

function getFileExtension (path = '') {
  const index = path.lastIndexOf('.')
  return index !== -1 ? path.substr(index) : ''
}

function formatting (filename, fileExtension, callback) {
  var basename = baseName(filename)
  const specs = {'4k': '3840x2160', '1080p': '1920x1080', '480p': '854x480', '240p': '426x240'}

  const paths = [`${basename}-4k${fileExtension}`]
  paths.push(`${basename}-1080p${fileExtension}`)
  paths.push(`${basename}-480p${fileExtension}`)
  paths.push(`${basename}-240p${fileExtension}`)

  ffmpeg(filename)
    .output(`${basename}-4k${fileExtension}`)
    .videoCodec('libx264')
    .size(specs['4k'])

    .output(`${basename}-1080p${fileExtension}`)
    .videoCodec('libx264')
    .size(specs['1080p'])

    .output(`${basename}-480p${fileExtension}`)
    .videoCodec('libx264')
    .size(specs['480p'])

    .output(`${basename}-240p${fileExtension}`)
    .videoCodec('libx264')
    .size(specs['240p'])

    .on('error', function (err) {
      callback(err)
    })
    .on('progress', function (progress) {
      console.log('... frames: ' + progress.frames)
    })
    .on('end', function () {
      console.log('Finished processing')
      callback(null, {message: 'Completed processing!!!', data: paths})
    })
    .run()
}

module.exports = {formatting, getFileExtension}
