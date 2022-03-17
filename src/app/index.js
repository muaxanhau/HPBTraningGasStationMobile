import 'react-native-gesture-handler'
import 'react-native-reanimated'

import React from 'react'
import {Provider} from 'react-redux'
import {store} from './store'

const AppProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export default AppProvider
