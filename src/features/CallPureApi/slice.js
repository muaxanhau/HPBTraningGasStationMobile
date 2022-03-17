import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const callPureApiSlice = createSlice({
  name: 'callPureApi',
  initialState,
  reducers: {
    example: (state, action) => {
      // mô tả api
      // action.payload có cấu trúc
      // {
      //   data: {},                    null?
      //   params: {},                  null?
      //   headers: {},                 null?
      //   callback: {
      //     onSuccess: response => {}, null?
      //     onError: error => {},      null?
      //     onFinally: data => {}      null?
      //   }
      // }
    }
  }
})

export const callPureApiActions = callPureApiSlice.actions

export default callPureApiSlice.reducer
