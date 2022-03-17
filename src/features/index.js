// global loader
import GlobalLoader from './GlobalLoader'
import globalLoaderReducer, {
  globalLoaderState,
  globalLoaderActions
} from './GlobalLoader/slice'

// authentication
import authenticationReducer, {
  authenticationState,
  authenticationActions
} from './Authentication/slice'
import authenticationSaga from './Authentication/saga'

// call pure api
import callPureApiReducer, { callPureApiActions } from './CallPureApi/slice'
import callPureApiSaga from './CallPureApi/saga'

// reducers ===================================================================
const reducers = {
  callPureApi: callPureApiReducer,
  globalLoader: globalLoaderReducer,
  authentication: authenticationReducer
}
// sagas ======================================================================
const sagas = [callPureApiSaga, authenticationSaga]
// states =====================================================================
const states = {
  globalLoaderState,
  authenticationState
}
// actions ====================================================================
const actions = {
  callPureApiActions,
  globalLoaderActions,
  authenticationActions
}
// views ======================================================================
const views = {
  GlobalLoader
}

export { reducers, sagas, states, actions, views }
