import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native'
import React, {useState} from 'react'
import {Styles, Colors, DummyData, NameScreens} from './../../constants'
import {NormalButton, Rating} from '../../components'
import CheckBox from '@react-native-community/checkbox'
import {Picker} from '@react-native-picker/picker'
import {useNavigation} from '@react-navigation/native'

// constants
const {width, height} = Dimensions.get('window')

// main
const EditGasStation = () => {
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
  const [rate, setRate] = useState(2)

  const handleBackListGasStation = () => {
    navigation.navigate(NameScreens.listGasStation)
  }

  // main
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[Styles.titleStyles, {textAlign: 'center'}]}>
          ガソリンスタンド更新
        </Text>
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
                  <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
            Longitude:
          </Text>
          <TextInput
            style={[
              styles.textInput,
              {
                borderColor:
                  currentInputName === 'longitude' ? Colors.no1 : Colors.no3,
              },
            ]}
            onFocus={() => setCurrentInputName(prev => (prev = 'longitude'))}
            onBlur={() => setCurrentInputName(prev => (prev = ''))}
          />

          <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
            Latitude:
          </Text>
          <TextInput
            style={[
              styles.textInput,
              {
                borderColor:
                  currentInputName === 'latitude' ? Colors.no1 : Colors.no3,
              },
            ]}
            onFocus={() => setCurrentInputName(prev => (prev = 'latitude'))}
            onBlur={() => setCurrentInputName(prev => (prev = ''))}
          />

          <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
            住所:
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
          <TextInput
            style={[
              styles.textInput,
              {
                borderColor:
                  currentInputName === 'address' ? Colors.no1 : Colors.no3,
              },
            ]}
            onFocus={() => setCurrentInputName(prev => (prev = 'address'))}
            onBlur={() => setCurrentInputName(prev => (prev = ''))}
          />

          <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
            開館時間:
          </Text>
          <TextInput
            style={[
              styles.textInput,
              {
                borderColor:
                  currentInputName === 'time' ? Colors.no1 : Colors.no3,
              },
            ]}
            onFocus={() => setCurrentInputName(prev => (prev = 'time'))}
            onBlur={() => setCurrentInputName(prev => (prev = ''))}
          />

          <View style={{flexDirection: 'row'}}>
            <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
              評価:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: Styles.itemSpacing,
                flex: 1,
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  value={rate === 1}
                  onValueChange={val => setRate(prev => (prev = 1))}
                />
                <Rating type={1} />
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  value={rate === 2}
                  onValueChange={val => setRate(prev => (prev = 2))}
                />
                <Rating type={2} />
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  value={rate === 3}
                  onValueChange={val => setRate(prev => (prev = 3))}
                />
                <Rating type={3} />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: Styles.itemSpacing,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <NormalButton title='更新' style={{minWidth: width * 0.3}} />
          <NormalButton
            title='戻る'
            style={{minWidth: width * 0.3, marginLeft: Styles.itemSpacing}}
            onPress={handleBackListGasStation}
          />
        </View>
      </View>
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

export default EditGasStation
