import * as React from 'react'
import {View, Image, Text, FlatList, StyleSheet} from 'react-native'
import DoubleQuarterTopSVG from '../components/svg/doubleQuarterTopSVG'
import DoubleQuarterBottomSVG from '../components/svg/doubleQuarterBottomSVG'

const homeScreen2 = () => {
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
      <View style={HomeStyle.itemContainer}>
        <View style={HomeStyle.itemHeader}>
          <Image
            style={HomeStyle.avator}
            resizeMode={'cover'}
            source={require('./test.jpg')}></Image>
          <View style={{marginLeft: 5, justifyContent: 'center'}}>
            <Text style={{fontSize: 13, color: 'black'}}>최유정</Text>
            <Text style={{color: '#9e9e9e', fontSize: 10, textAlign: 'center'}}>
              2020.08.12
            </Text>
          </View>

          <View
            style={{
              width: 55,
              height: 30,
              // backgroundColor: '#efefef',
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
              borderWidth: 1,
              borderColor: '#808080',
            }}>
            <Text style={{fontSize: 12, color: '#808080'}}>공유하기</Text>
          </View>
        </View>

        <Image
          style={HomeStyle.imageSection}
          resizeMode={'cover'}
          source={require('./optimize.jpg')}></Image>

        <View style={HomeStyle.textSection}>
          <DoubleQuarterTopSVG />

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              // marginBottom: 7,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: '#525252',
                fontWeight: '700',
                marginBottom: 3,
              }}
              numberOfLines={2}>
              테스트 글자테스트 글자테스트 글자테스트 글자테스트 글자
            </Text>

            <Text numberOfLines={2} style={{fontSize: 12, color: '#9e9e9e'}}>
              테스트 글자테스트 글자테스트 글자테스트 글자테스트 a글자테스트
              글자
            </Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <DoubleQuarterBottomSVG />
          </View>

          {/* 해쉬 태그 */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingLeft: 5,
              alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <View style={[HomeStyle.hashLabel, HomeStyle.pinkLabel]}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#ffffff',
                  fontWeight: '700',
                }}>
                #꽃구경
              </Text>
            </View>
            <View style={[HomeStyle.hashLabel, HomeStyle.orangeLabel]}>
              <Text style={{fontSize: 11, color: '#ffffff', fontWeight: '700'}}>
                #데이트
              </Text>
            </View>
            <View style={HomeStyle.hashLabel}>
              <Text style={{fontSize: 11, color: '#ffffff', fontWeight: '700'}}>
                #여행
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={HomeStyle.container}>
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
    backgroundColor: '#ffffff',
  },

  listContainer: {},

  itemContainer: {
    borderColor: '#efefef',
    paddingVertical: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  avator: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imageSection: {
    width: '100%',
    height: 250,
  },

  textSection: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },

  hashLabel: {
    backgroundColor: '#efefef',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 5,
  },

  pinkLabel: {
    backgroundColor: 'pink',
  },
  orangeLabel: {
    backgroundColor: 'orange',
  },
})

export default homeScreen2
