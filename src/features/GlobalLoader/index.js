import React, { useRef, useEffect } from 'react'
import { StyleSheet, Modal, Text, View, Animated, Easing } from 'react-native'
import { useSelector } from 'react-redux'
import { globalLoaderState } from './slice'

// constants
const RING_SIZE = 80
const RING_ANIMATE_DURATION = 1500
const COLOR_RING_1 = (opacity = 1) => `rgba(22, 87, 231, ${opacity})`
const COLOR_RING_2 = (opacity = 1) => `rgba(249, 59, 120, ${opacity})`
const COLOR_RING_3 = (opacity = 1) => `rgba(154, 55, 255, ${opacity})`

// elements
const Rings = () => {
  const rotateValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: RING_ANIMATE_DURATION,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start()
  }, [])

  return (
    <View style={styles.ringContainer}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: RING_SIZE / 4,
          transform: [
            {
              rotate: rotateValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['360deg', '0deg']
              })
            }
          ]
        }}
      >
        <View style={styles.ringBody('45deg', COLOR_RING_1(1))}>
          <View style={styles.ringHead('left', COLOR_RING_1(0.1))}>
            <View
              style={{
                width: '70%',
                aspectRatio: 1,
                backgroundColor: COLOR_RING_1(0.2),
                borderRadius: RING_SIZE,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  width: '70%',
                  aspectRatio: 1,
                  backgroundColor: COLOR_RING_1(0.4),
                  borderRadius: RING_SIZE,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    width: '70%',
                    aspectRatio: 1,
                    backgroundColor: COLOR_RING_1(1),
                    borderRadius: RING_SIZE
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: RING_SIZE / 2,
          transform: [
            {
              rotate: rotateValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['360deg', '0deg']
              })
            }
          ]
        }}
      >
        <View style={styles.ringBody('225deg', COLOR_RING_2(1))}>
          <View style={styles.ringHead('left', COLOR_RING_2(0.1))}>
            <View
              style={{
                width: '70%',
                aspectRatio: 1,
                backgroundColor: COLOR_RING_2(0.2),
                borderRadius: RING_SIZE,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  width: '70%',
                  aspectRatio: 1,
                  backgroundColor: COLOR_RING_2(0.4),
                  borderRadius: RING_SIZE,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    width: '70%',
                    aspectRatio: 1,
                    backgroundColor: COLOR_RING_2(1),
                    borderRadius: RING_SIZE
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: [
            {
              rotate: rotateValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })
            }
          ]
        }}
      >
        <View style={styles.ringBody('-45deg', COLOR_RING_3(1))}>
          <View style={styles.ringHead('right', COLOR_RING_3(0.1))}>
            <View
              style={{
                width: '70%',
                aspectRatio: 1,
                backgroundColor: COLOR_RING_3(0.2),
                borderRadius: RING_SIZE,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  width: '70%',
                  aspectRatio: 1,
                  backgroundColor: COLOR_RING_3(0.4),
                  borderRadius: RING_SIZE,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    width: '70%',
                    aspectRatio: 1,
                    backgroundColor: COLOR_RING_3(1),
                    borderRadius: RING_SIZE
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

// main
const GlobalLoader = () => {
  // constants
  const selectGlobalLoader = useSelector(globalLoaderState)

  // render
  return (
    <Modal
      visible={selectGlobalLoader.enabled}
      transparent={true}
      animationType='fade'
    >
      <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <Rings />

        <Text
          style={{
            marginTop: 20,
            color: 'rgba(18, 243, 200, 0.7)',
            fontWeight: 'bold',
            fontSize: 20
          }}
        >
          Loading...
        </Text>
      </View>
    </Modal>
  )
}

// styles
const styles = StyleSheet.create({
  container: {
    zIndex: 9999,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ringContainer: {
    width: RING_SIZE * 1.5,
    aspectRatio: 1
  },
  ringBody: (rotate = '0deg', color = 'cyan') => ({
    position: 'relative',
    width: RING_SIZE,
    aspectRatio: 1,
    borderRadius: RING_SIZE / 2,
    borderWidth: 3,
    borderColor: 'transparent',
    borderTopColor: color,
    transform: [{ rotate }]
  }),
  ringHead: (direction = 'left', color = 'cyan') => {
    const distance = (RING_SIZE / 2) * (1 - 1 / Math.sqrt(2))
    const size = RING_SIZE * 0.65

    const style1 = {
      position: 'absolute',
      width: size,
      aspectRatio: 1,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: size / 2,
      top: distance,
      transform: [
        { translateX: (size / 2) * (direction === 'left' ? -1 : 1) },
        { translateY: -size / 2 }
      ]
    }

    const style2 =
      direction === 'left' ? { left: distance } : { right: distance }

    return { ...style1, ...style2 }
  }
})

export default GlobalLoader
