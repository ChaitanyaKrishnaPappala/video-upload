import axios from 'axios'

const client = axios.create({baseURL: `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}`})

export const fetchVideoFiles = (id) => {
  return dispatch => {
    return client.get(`/watch/${id}`)
      .then(res => {
        return dispatch({
          type: 'FETCH_FILE_SUCCESS',
          message: res.data.message,
          files: res.data.files,
          title: res.data.title
        })
      })
      .catch(err => {
        return dispatch({type: 'FETCH_FILE_FAILURE', error: err.response.data.message})
      })
  }
}
