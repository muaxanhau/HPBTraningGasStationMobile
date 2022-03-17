import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {Colors, Styles, NameScreens} from './../../constants'
import {NormalButton} from './../../components'
import {useNavigation} from '@react-navigation/native'

// constants
const {width, height} = Dimensions.get('window')

// main
const Login = () => {
  // constants
  const navigation = useNavigation()
  const [currentInputName, setCurrentInputName] = useState('email')

  const handleLogin = () => {
    navigation.push(NameScreens.listGasStation)
  }

  // render
  return (
    <View style={styles.container}>
      <Text style={Styles.titleStyles}>ガソリンスタンド管理</Text>
      <View style={{marginVertical: Styles.itemSpacing * 2}}>
        <Text style={Styles.textStyles}>メール:</Text>
        <TextInput
          style={[
            styles.textInput,
            {
              borderColor:
                currentInputName === 'email' ? Colors.no1 : Colors.no3,
            },
          ]}
          autoFocus
          onFocus={() => {
            setCurrentInputName(prev => (prev = 'email'))
          }}
          onBlur={() => setCurrentInputName(prev => (prev = ''))}
        />
        <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
          パスワード:
        </Text>
        <TextInput
          style={[
            styles.textInput,
            {
              borderColor:
                currentInputName === 'password' ? Colors.no1 : Colors.no3,
            },
          ]}
          secureTextEntry
          onFocus={() => {
            setCurrentInputName(prev => (prev = 'password'))
          }}
          onBlur={() => setCurrentInputName(prev => (prev = ''))}
        />
      </View>

      <NormalButton title='ログイン' onPress={handleLogin} />
    </View>
  )
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.no2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: width - Styles.paddingHorizontal * 2,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: Styles.borderRadius,
    marginTop: Styles.itemSpacing,
  },
})

export default Login
