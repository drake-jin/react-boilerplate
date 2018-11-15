import { createAction } from 'redux-actions'
import { Map } from 'immutable'

export const HANDLE_CHANGE_POST_TEXT = 'post/HANDLE_CHANGE_POST_TEXT'

export const initialState = Map({
  post: Map({
    text: '',
  }),
})

export const handleChangePostText = createAction(HANDLE_CHANGE_POST_TEXT, (event) => {
  console.log(event)
  return event
})

// export const putUserRenew = createAction(PUT_USER_RENEW, userAPI.putUserRenew)
// export const getMyPageProfile = createAction(GET_MYPAGE_USER, userAPI.getMyPageProfile)
// export const putUser = createAction(PUT_USER, userAPI.putUser)
// export const patchMyPageProfile = createAction(PATCH_MYPAGE_PROFILE, userAPI.patchMyPageProfile)
