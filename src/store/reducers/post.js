import { handleActions } from 'redux-actions'

import * as postActions from 'store/actions/post'

export default handleActions({
  [postActions.HANDLE_CHANGE_POST_TEXT]: (state, { payload }) => state.setIn(['post', 'text'], payload),
}, postActions.initialState)
