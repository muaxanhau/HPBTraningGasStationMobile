import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
  Home,
  Login,
  Detail,
  NewGasStation,
  EditGasStation,
  ListGasStation,
} from './../../screens'
import {NameScreens} from './../../constants'

// constants
const Stack = createStackNavigator()
const screenOptions = {
  headerShown: false,
}

// main
const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={NameScreens.login}>
      <Stack.Screen name={NameScreens.home} component={Home} />
      <Stack.Screen name={NameScreens.login} component={Login} />
      <Stack.Screen name={NameScreens.detail} component={Detail} />
      <Stack.Screen
        name={NameScreens.newGasStation}
        component={NewGasStation}
      />
      <Stack.Screen
        name={NameScreens.editGasStation}
        component={EditGasStation}
      />
      <Stack.Screen
        name={NameScreens.listGasStation}
        component={ListGasStation}
      />
    </Stack.Navigator>
  )
}

export default Stacks
