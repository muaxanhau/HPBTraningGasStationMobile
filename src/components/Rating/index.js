import {Image} from 'react-native'
import React from 'react'
import {Images} from './../../constants'

const Rating = ({type = 2, styles}) => {
  return (
    <Image
      style={styles}
      source={
        type === 1 ? Images.rate1 : type === 3 ? Images.rate3 : Images.rate2
      }
    />
  )
}

export default Rating
