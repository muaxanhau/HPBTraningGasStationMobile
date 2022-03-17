import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {NameScreens, Colors, NameStorageKeys} from './../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch} from 'react-redux'
import {actions} from './../../features'
import {useNavigation} from '@react-navigation/native'

// main
const Home = () => {
  // constants
  const navigation = useNavigation()
  const {authenticationActions} = actions
  const dispatch = useDispatch()

  const handleLoading = () => {
    dispatch(
      authenticationActions.login({
        data: {username: 'thinh', password: '123456'},
        callback: {
          onSuccess: response => {
            // navigation.push(NameScreens.list)
          },
          onError: error => {},
          onFinally: () => {},
        },
      }),
    )
  }

  // effects
  React.useLayoutEffect(() => {
    AsyncStorage.getItem(NameStorageKeys.token).then(value => {
      // !!value && navigation.push(NameScreens.home)
    })
  })

  // render
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Home</Text>

      <TouchableOpacity onPress={handleLoading} style={{marginTop: 30}}>
        <Text>Loading</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.push(NameScreens.login)
        }}
        style={{marginTop: 30}}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.push(NameScreens.detail)
        }}
        style={{marginTop: 30}}>
        <Text>Detail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.push(NameScreens.newGasStation)
        }}
        style={{marginTop: 30}}>
        <Text>New</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.push(NameScreens.editGasStation)
        }}
        style={{marginTop: 30}}>
        <Text>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.push(NameScreens.listGasStation)
        }}
        style={{marginTop: 30}}>
        <Text>List</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.no1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home
