import {all, delay, fork, put, takeLeading} from 'redux-saga/effects'
import {authenticationActions} from './slice'
import {globalLoaderActions} from './../GlobalLoader/slice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {NameStorageKeys} from './../../constants'

// =========================================================================
function * workLogin (action) {
  yield put(globalLoaderActions.enable())

  console.log(action.payload.data)
  yield delay(2000)
  AsyncStorage.setItem(NameStorageKeys.token, '1234567').then(() => {
    action.payload.callback?.onSuccess?.()
  })

  yield put(globalLoaderActions.disable())
}
function * watchLogin (action) {
  yield takeLeading([authenticationActions.login().type], workLogin)
}

// =========================================================================
function * authenticationSaga () {
  yield all([fork(watchLogin)])
}

export default authenticationSaga
