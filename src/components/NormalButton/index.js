import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Styles, Colors} from './../../constants'

const NormalButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={{textAlign: 'center', color: Colors.no2}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Styles.paddingHorizontal,
    paddingVertical: Styles.paddingVertical,
    backgroundColor: Colors.no1,
    borderRadius: Styles.borderRadiusMedium,
  },
})

export default NormalButton
