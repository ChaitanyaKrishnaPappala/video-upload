import {connect} from 'react-redux'
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Player from '../components/Player'
import Select from '../components/Select'
import {selector} from '../redux/selector'
import {toast} from 'react-toastify'
import {Map} from 'immutable'
import {fetchVideoFiles} from '../redux/actions'

const Index = ({fetchVideoFiles, match, files, retrieveErrorMsg}) => {
  const {params} = match
  const id = params ? params.id : ''
  const [resolution, setResolution] = useState([{label: '480p', value: '480p'}])
  const resolutions = [{label: '240p', value: '240p'},
    {label: '480p', value: '480p'},
    {label: '1080p', value: '1080p'},
    {label: '4k', value: '4k'}]

  if (retrieveErrorMsg) {
    toast(
      retrieveErrorMsg,
      {
        className: 'Toastify__toast-error',
        bodyClassName: 'Toastify__body',
        autoClose: false
      }
    )
  }

  useEffect(() => {
    id && fetchVideoFiles(id)
    retrieveErrorMsg && toast(
      retrieveErrorMsg,
      {
        className: 'Toastify__toast-error',
        bodyClassName: 'Toastify__body',
        autoClose: false
      }
    )
  }, [id])

  const url = files.get(resolution[0].value, '')
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <Player url={url} />
        </div>
        <div className='col-md-8'>
          <Select
            style={{height: 5}} value={resolution} setValue={(values) => {
              setResolution([values])
            }} options={resolutions}
          />
        </div>
      </div>
    </div>)
}

Index.propTypes = {
  fetchVideoFiles: PropTypes.func,
  retrieveErrorMsg: PropTypes.string,
  id: PropTypes.string,
  match: PropTypes.object,
  files: PropTypes.instanceOf(Map)
}
export default connect(selector, {fetchVideoFiles})(Index)
