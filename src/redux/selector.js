import {createStructuredSelector} from 'reselect'
import {Map} from 'immutable'

export const selector = createStructuredSelector({
  id: (state) => state.getIn(['video', 'upload', 'id'], ''),
  retrieveSuccessMsg: (state) => state.getIn(['video', 'retrieve', 'message'], ''),
  files: (state) => state.getIn(['video', 'retrieve', 'data'], Map()),
  retrieveErrorMsg: (state) => state.getIn(['video', 'retrieve', 'error'], '')
})
