import { all, fork, takeLeading } from 'redux-saga/effects'
import { callPureApiActions } from './slice'

// =========================================================================
function * workExample (action) {
  const { data, params, headers, callback } = action.payload
  callback.onSuccess?.()
  callback.onError?.()
  callback.onFinally?.()
}
function * watchExample (action) {
  yield takeLeading([callPureApiActions.example().type], workExample)
}

// =========================================================================
function * callPureApiSaga () {
  yield all([fork(watchExample)])
}

export default callPureApiSaga
