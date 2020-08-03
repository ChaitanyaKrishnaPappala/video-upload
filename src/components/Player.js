import React from 'react'
import '../fileUpload.css'
import PropTypes from 'prop-types'
const Player = ({url}) => {
  return (
    <div key={url}>
      <video width='750' height='500' controls id='example_video_1' className='video-js vjs-default-skin'>
        <source src={url} type='video/mp4' />
      </video>
    </div>
  )
}

Player.propTypes = {
  url: PropTypes.string
}

export default Player
