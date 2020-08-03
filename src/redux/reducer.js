import {fromJS, Map} from 'immutable'

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'FETCH_FILE_SUCCESS':
      state.setIn(['video', 'retrieve', 'message'], action.message)
      return state.setIn(['video', 'retrieve', 'data'], fromJS(action.files))
    case 'FETCH_FILE_FAILURE':
      return state.setIn(['video', 'retrieve', 'error'], action.error)
    default:
      return state
  }
}

export default reducer
