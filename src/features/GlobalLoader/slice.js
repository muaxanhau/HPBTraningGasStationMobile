import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  enabled: false
}

const globalLoaderSlice = createSlice({
  name: 'globalLoader',
  initialState,
  reducers: {
    enable: state => {
      state.enabled = true
    },
    disable: state => {
      state.enabled = false
    }
  }
})

export const globalLoaderActions = globalLoaderSlice.actions

export const globalLoaderState = state => state.globalLoader

export default globalLoaderSlice.reducer
