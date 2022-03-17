import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogined: false
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action) => {},
    loginSuccess: state => ({
      ...state,
      isLogined: true
    })
  }
})

export const authenticationActions = authenticationSlice.actions

export const authenticationState = state => state.authentication

export default authenticationSlice.reducer
