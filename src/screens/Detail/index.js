import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native'
import React from 'react'
import {Colors, Styles, DummyData, NameScreens} from './../../constants'
import {NormalButton, Rating} from './../../components'
import {useNavigation} from '@react-navigation/native'

// constansts
const {width, height} = Dimensions.get('window')

// main
const Detail = () => {
  //constants
  const navigation = useNavigation()

  const handleBackListGasStation = () => {
    navigation.navigate(NameScreens.listGasStation)
  }

  // render
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[Styles.titleStyles, {textAlign: 'center'}]}>
          投稿の閲覧
        </Text>

        <View
          style={{marginVertical: Styles.marginVertical, flexDirection: 'row'}}>
          <View>
            <Text style={Styles.textStyles}>ガソリンスタンド: </Text>
            <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
              種類:
            </Text>
            <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
              住所:
            </Text>
            <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
              開館時間:
            </Text>
            <Text style={[Styles.textStyles, {marginTop: Styles.itemSpacing}]}>
              評価:
            </Text>
          </View>
          <View>
            <Text style={Styles.boldTextStyles}>ABC XYZ</Text>
            <Text
              style={[Styles.boldTextStyles, {marginTop: Styles.itemSpacing}]}>
              A92, A95
            </Text>
            <Text
              style={[Styles.boldTextStyles, {marginTop: Styles.itemSpacing}]}>
              Số 1, Tô Ký, Quận 12
            </Text>
            <Text
              style={[Styles.boldTextStyles, {marginTop: Styles.itemSpacing}]}>
              7h ~ 22h
            </Text>
            <Rating type={2} />
          </View>
        </View>

        {DummyData.comments.map((item, _) => (
          <View key={_.toString()} style={styles.commentBox}>
            <Text style={Styles.textStyles}>
              {item.year}年 {item.month}月 {item.day}日
            </Text>
            <Text
              style={[Styles.boldTextStyles, {marginTop: Styles.itemSpacing}]}>
              {item.content}
            </Text>
          </View>
        ))}

        <View
          style={{marginTop: Styles.marginVertical, alignItems: 'flex-end'}}>
          <NormalButton
            title='戻る'
            onPress={handleBackListGasStation}
            style={{minWidth: width * 0.3}}
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
    paddingVertical: Styles.paddingVertical,
    paddingHorizontal: Styles.paddingHorizontal,
  },
  commentBox: {
    marginTop: Styles.itemSpacing,
    backgroundColor: Colors.no4,
    borderColor: Colors.no3,
    borderWidth: 1,
    paddingHorizontal: Styles.paddingHorizontal,
    paddingVertical: Styles.paddingVertical,
    borderRadius: Styles.borderRadius,
  },
})

export default Detail
