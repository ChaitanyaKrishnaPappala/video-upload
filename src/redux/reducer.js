import {fromJS, Map} from 'immutable'

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'FETCH_FILE_SUCCESS':
      state = state.setIn(['video', 'retrieve', 'message'], action.message)
        .setIn(['video', 'retrieve', 'title'], action.title)
        .setIn(['video', 'retrieve', 'data'], fromJS(action.files))
      return state
    case 'FETCH_FILE_FAILURE':
      return state.setIn(['video', 'retrieve', 'error'], action.error)
    default:
      return state
  }
}

export default reducer
