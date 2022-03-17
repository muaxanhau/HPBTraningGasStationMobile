import React from 'react'
import AppProvider from './app'
import AppNavigator from './navigation'
import {views} from './features'

const Main = () => {
  // constants
  const {GlobalLoader} = views

  // render
  return (
    <AppProvider>
      <AppNavigator />

      <GlobalLoader />
    </AppProvider>
  )
}

export default Main
