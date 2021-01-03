import * as React from 'react'
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import DoubleQuarterTopSVG from '../components/svg/doubleQuarterTopSVG'
import DoubleQuarterBottomSVG from '../components/svg/doubleQuarterBottomSVG'

const homeScreen = () => {
  const tempData = [
    {
      id: 't1',
      title: 'test1',
      comments: 1,
    },
    {
      id: 't2',
      title: 'test2',
      comments: 0,
    },
    {
      id: 't3',
      title: 'test3',
      comments: 3,
    },
    {
      id: 't4',
      title: 'test2',
      comments: 5,
    },
    {
      id: 't5',
      title: 'test3',
      comments: 0,
    },
  ]
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={HomeStyle.itemContainer}>
        <Image
          style={HomeStyle.imageSection}
          resizeMode={'cover'}
          source={require('./test.jpg')}></Image>
        <View style={HomeStyle.textSection}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <DoubleQuarterTopSVG />
            <Text style={{color: '#dedede', fontSize: 10, textAlign: 'center'}}>
              2020.08.12
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              // paddingVertical: 7,
              marginBottom: 7,
              paddingHorizontal: 5,
              // paddingLeft: 2,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: '#525252',
                fontWeight: '700',
                marginBottom: 3,
              }}
              numberOfLines={1}>
              테스트 글자테스트 글자테스트 글자테스트 글자테스트 글자
            </Text>

            {/* <Text style={{color: '#9e9e9e', fontSize: 11, marginVertical: 5}}>
              2020.08.12
            </Text> */}

            <Text numberOfLines={2} style={{fontSize: 12, color: '#9e9e9e'}}>
              테스트 글자테스트 글자테스트 글자테스트 글자테스트 a글자테스트
              글자
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              // alignItems: ,
              paddingLeft: 5,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: 'orange',
                width: 50,
                height: 20,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 11, color: '#ffffff', fontWeight: '700'}}>
                #꽃구경
              </Text>
            </View>
            <DoubleQuarterBottomSVG />
          </View>

          {/* <Text style={{color: '#9e9e9e', fontSize: 11, marginVertical: 5}}>
            2020.08.12
          </Text> */}
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={HomeStyle.container}>
      {/* <doubleQuarterTopSVG /> */}
      <FlatList
        data={tempData}
        renderItem={renderItem}
        keyExtracto={(item) => item.id}
      />
    </View>
  )
}

const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },

  listContainer: {},

  itemContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    // paddingHorizontal: 14,
    // paddingVertical: 15,

    // marginBottom: 15,
    // borderBottomWidth: 1,
    borderColor: '#efefef',
    // borderRadius: 15,
    // marginVertical: 10,
    // elevation: 1,
    // marginBottom: 10,
    paddingBottom: 13,
  },

  imageSection: {
    width: 120,
    height: 120,
    // borderRadius: 10,
  },

  textSection: {
    flex: 1,
    // padding: 14,
    paddingVertical: 8,
    paddingHorizontal: 15,
    // paddingVertical: 13,
  },
})

export default homeScreen
