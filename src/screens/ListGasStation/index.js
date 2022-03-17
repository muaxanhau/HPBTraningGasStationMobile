import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native'
import React, {useState, useRef} from 'react'
import {Colors, Styles, DummyData, NameScreens} from './../../constants'
import {NormalButton, Rating} from './../../components'
import CheckBox from '@react-native-community/checkbox'
import {Picker} from '@react-native-picker/picker'
import {Swipeable} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

// constants
const {width, height} = Dimensions.get('window')

// main
const ListGasStation = () => {
  // constants
  const navigation = useNavigation()
  const [currentInputName, setCurrentInputName] = useState('')
  const [gasTypes, setGasTypes] = useState(
    DummyData.gasTypes.map((item, index) => ({
      index,
      name: item.name,
      isSelected: false,
    })),
  )
  const [selectedDistrict, setSelectedDistrict] = useState(
    DummyData.districts[0].code,
  )
  const [gasStations, setGasStation] = useState(DummyData.gasStations)
  const swipeItemsRef = useRef([])

  const handleItem = index => {
    // swipeItemsRef.current[index].openRight()

    navigation.push(NameScreens.detail)
  }

  const handleNewGasStation = () => {
    navigation.push(NameScreens.newGasStation)
  }

  // render
  return (
    <ScrollView
      onScroll={() => {
        swipeItemsRef.current.forEach(item => item.close())
      }}>
      <View style={styles.container}>
        <Text style={[Styles.titleStyles, {textAlign: 'center'}]}>
          ガソリンスタンド一覧
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <NormalButton
            title='マップ'
            style={{marginTop: Styles.marginVertical, minWidth: width * 0.3}}
          />
        </View>

        <View style={{marginTop: Styles.marginVertical}}>
          <Text style={Styles.textStyles}>ガソリンスタンド名:</Text>
          <TextInput
            style={[
              styles.textInput,
              {
                borderColor:
                  currentInputName === 'name' ? Colors.no1 : Colors.no3,
              },
            ]}
            onFocus={() => setCurrentInputName(prev => (prev = 'name'))}
            onBlur={() => setCurrentInputName(prev => (prev = ''))}
          />

          <View style={{flexDirection: 'row', marginTop: Styles.itemSpacing}}>
            <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
              種類:
            </Text>
            <View
              style={{
                marginLeft: Styles.itemSpacing,
              }}>
              {gasTypes.map((item, _) => (
                <View
                  key={_.toString()}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CheckBox
                    value={gasTypes[item.index].isSelected}
                    onValueChange={val => {
                      const tmp = [...gasTypes]
                      tmp[item.index].isSelected = val
                      setGasTypes(prev => (prev = tmp))
                    }}
                  />
                  <Text style={Styles.boldTextStyles}>{item.name}</Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
            地区:
          </Text>
          <View
            style={{
              borderWidth: 1,
              marginVertical: Styles.itemSpacing,
              borderRadius: Styles.borderRadius,
              borderColor: Colors.no3,
            }}>
            <Picker
              selectedValue={selectedDistrict}
              onValueChange={(itemValue, _) =>
                setSelectedDistrict(prev => (prev = itemValue))
              }>
              {DummyData.districts.map((item, _) => (
                <Picker.Item
                  key={_.toString()}
                  label={item.name}
                  value={item.code}
                />
              ))}
            </Picker>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <NormalButton title='検索' style={{minWidth: width * 0.3}} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: Styles.marginVertical * 2,
            }}>
            <NormalButton
              title='登録'
              style={{minWidth: width * 0.3}}
              onPress={handleNewGasStation}
            />
          </View>
        </View>
      </View>

      {gasStations.map((item, index) => (
        <TouchableOpacity
          key={index.toString()}
          onLongPress={() => {
            swipeItemsRef.current[index].openRight()
          }}
          onPress={() => handleItem(index)}>
          <View>
            <Swipeable
              ref={element => {
                swipeItemsRef.current[index] = element
              }}
              friction={2}
              renderRightActions={(progress, dragX) => {
                const opacity = dragX.interpolate({
                  inputRange: [-width * 0.3, 0],
                  outputRange: [1, 0],
                })

                return (
                  <Animated.View
                    style={{
                      width: width * 0.3,
                      justifyContent: 'center',
                      opacity,
                    }}>
                    <TouchableOpacity
                      style={{marginBottom: Styles.itemSpacing}}
                      onPress={() => {
                        swipeItemsRef.current[index].close()
                        navigation.push(NameScreens.editGasStation)
                      }}>
                      <View
                        style={{
                          width: width * 0.3 - Styles.paddingHorizontal,
                          borderRadius: Styles.borderRadiusMedium,
                          padding: Styles.padding,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: Colors.no5,
                        }}>
                        <Text style={[Styles.textStyles, {color: Colors.no2}]}>
                          Edit
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => swipeItemsRef.current[index].close()}>
                      <View
                        style={{
                          width: width * 0.3 - Styles.paddingHorizontal,
                          borderRadius: Styles.borderRadiusMedium,
                          padding: Styles.padding,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: Colors.no6,
                        }}>
                        <Text style={[Styles.textStyles, {color: Colors.no4}]}>
                          Del
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Animated.View>
                )
              }}>
              <Animated.View
                style={{
                  marginHorizontal: Styles.paddingHorizontal,
                  marginBottom: Styles.itemSpacing,
                  backgroundColor: Colors.no4,
                  borderRadius: Styles.borderRadius,
                  borderWidth: 1,
                  borderColor: Colors.no3,
                  padding: Styles.padding,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={Styles.textStyles}>ガソリンスタンド名:</Text>
                  <Text
                    style={[
                      Styles.boldTextStyles,
                      {marginLeft: Styles.itemSpacing},
                    ]}>
                    {item.name}
                  </Text>
                </View>

                <View
                  style={{flexDirection: 'row', marginTop: Styles.itemSpacing}}>
                  <Text style={Styles.textStyles}>種類:</Text>
                  <Text
                    style={[
                      Styles.boldTextStyles,
                      {marginLeft: Styles.itemSpacing},
                    ]}>
                    {item.gasTypes.map(
                      (item, index) =>
                        item + (item.length - 1 !== index ? ', ' : ''),
                    )}
                  </Text>
                </View>

                <View
                  style={{flexDirection: 'row', marginTop: Styles.itemSpacing}}>
                  <Text style={Styles.textStyles}>地区:</Text>
                  <Text
                    style={[
                      Styles.boldTextStyles,
                      {marginLeft: Styles.itemSpacing},
                    ]}>
                    {item.district}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: Styles.itemSpacing,
                  }}>
                  <Text style={Styles.textStyles}>Longitude, Latitude:</Text>
                  <Text style={[Styles.boldTextStyles, {alignSelf: 'center'}]}>
                    {item.coors}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: Styles.itemSpacing,
                    alignItems: 'center',
                  }}>
                  <Text style={Styles.textStyles}>評価:</Text>
                  <Rating
                    type={item.rate}
                    styles={{marginLeft: Styles.itemSpacing}}
                  />
                </View>
              </Animated.View>
            </Swipeable>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.no2,
    paddingHorizontal: Styles.paddingHorizontal,
    paddingVertical: Styles.paddingVertical,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: Styles.borderRadius,
    marginTop: Styles.itemSpacing,
  },
})

export default ListGasStation
