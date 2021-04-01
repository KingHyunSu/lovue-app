import * as React from 'react'
import {View, Image, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import DoubleQuarterTopSVG from '../components/svg/doubleQuarterTopSVG'
import DoubleQuarterBottomSVG from '../components/svg/doubleQuarterBottomSVG'
import PlusSVG from '../components/svg/plusCircle2'

const TimeLine = ({navigation}) => {
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
      <View style={timeLineContentStyle.container}>
        {/* <View style={timeLineContentStyle.header}>
          <Image
            style={timeLineContentStyle.avator}
            resizeMode={'cover'}
            source={require('./test.jpg')}></Image>
          <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
            <View>
              <Text style={{fontSize: 13, color: 'black'}}>최유정</Text>
              <Text style={{color: '#9e9e9e', fontSize: 11}}>
              2020.08.12
              </Text>
            </View>

            <Text style={{fontSize: 13, color: 'black'}}>
              만난지 132일째
            </Text>

          </View>
        </View> */}

        {/* header */}
        <View style={timeLineHeaderStyle.container}>
          <View style={timeLineHeaderStyle.userInfoBox}>
            <Image
              style={timeLineHeaderStyle.avator}
              resizeMode={'cover'}
              source={require('./test.jpg')}></Image>
            <Text style={timeLineHeaderStyle.name}>
              최유정
            </Text>
          </View>
          {/* <Text style={timeLineHeaderStyle.date}>
            2021.01.21
          </Text> */}
        </View>

        {/* content */}
        <Image
          style={timeLineContentStyle.image}
          resizeMode={'cover'}
          source={require('./optimize.jpg')}></Image>
        {/* <View style={timeLineContentStyle.imageDotWrap}>
          <View style={[timeLineContentStyle.imageDot, timeLineContentStyle.imageDotActive]}></View>
          <View style={timeLineContentStyle.imageDot}></View>
          <View style={timeLineContentStyle.imageDot}></View>
        </View> */}

        {/* <View style={{flexDirection:'row', alignItems:'center',justifyContent: 'center',marginTop:10}}>
          <Image
            style={timeLineHeaderStyle.avator}
            resizeMode={'cover'}
            source={require('./test.jpg')}></Image>
          <Text style={timeLineHeaderStyle.name}>
              최유정
          </Text>
        </View> */}

        {/* <Text style={timeLineHeaderStyle.date}>
            2021.01.21
        </Text> */}


        <View style={timeLineContentStyle.textWrap}>
          <Text
            style={timeLineContentStyle.text}
            numberOfLines={3}>
              테스트 글자테스트 글자테스트 글자테스트 글자테스트 글자
              테스트 글자테스트 글자테스트 글자테스트 글자테스트 a글자테스트
              글자
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={[timeLineContentStyle.subImageWrap]}>
            <Image
              style={timeLineContentStyle.subImage}
              source={require('./optimize.jpg')}></Image>
          </View>
          <View style={[timeLineContentStyle.subImageWrap]}>
            <Image
              style={timeLineContentStyle.subImage}
              source={require('./optimize.jpg')}></Image>
          </View>
          <View style={[timeLineContentStyle.subImageWrap]}>
            <Image
              style={timeLineContentStyle.subImage}
              source={require('./optimize.jpg')}></Image>
          </View>
          <View style={[timeLineContentStyle.subImageWrap]}>
            <Image
              style={timeLineContentStyle.subImage}
              source={require('./optimize.jpg')}></Image>
          </View>
        </View>
        {/* 해쉬 태그 */}
        {/* <View style={hashTagStyle.container}>
          <View style={[hashTagStyle.hashTag, hashTagStyle.pinkLabel]}>
            <Text
              style={{
                fontSize: 11,
                color: '#ffffff',
                fontWeight: '700',
              }}>
                #꽃구경
            </Text>
          </View>
          <View style={[hashTagStyle.hashTag, hashTagStyle.orangeLabel]}>
            <Text style={{fontSize: 11, color: '#ffffff', fontWeight: '700'}}>
                #데이트
            </Text>
          </View>
          <View style={hashTagStyle.hashTag}>
            <Text style={{fontSize: 11, color: '#ffffff', fontWeight: '700'}}>
                #여행
            </Text>
          </View>
        </View> */}
      </View>
    )
  }
  return (
    <View style={timeLineStyle.container}>
      <FlatList
        data={tempData}
        renderItem={renderItem}
        keyExtracto={(item) => item.id}
      />
      {/* 작은 화면에서는 미니 FAB를 사용해야합니다. 화면 너비가 460dp 이하인 경우 기본 FAB (56dp)의 컨테이너는 미니 크기 (40dp)로 변환되어야합니다 */}
      <TouchableOpacity
        onPress={() => navigation.navigate('TimeLineDetail')} 
        style={{width:56,height:56,borderRadius:50,backgroundColor:'purple',position:'absolute',right:16,bottom:16}}>

      </TouchableOpacity>
    </View>
  )
}

const pageMargin = 16
const timeLineStyle = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },

  listContainer: {},
})

const timeLineHeaderStyle = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center'
  },
  userInfoBox: {
    flexDirection: 'row',
    marginBottom: 5
  },
  avator: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10
  },
  name: {
    fontSize: 13,
    color: '#586874'
    // 757676 얇게
    // 585859 일반
  },
  date: {
    fontSize: 13,
    color: '#757676'
  }
})

const timeLineContentStyle = StyleSheet.create({
  container: {
    marginHorizontal: pageMargin,
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10
  },
  imageDotWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  imageDot: {
    width: 6,
    height: 6, 
    backgroundColor:'#efefef',
    borderRadius: 3,
    marginHorizontal:3
  },
  imageDotActive: {
    backgroundColor: '#afafaf'
  },

  subImageWrap: {
    width: '20%',
    aspectRatio: 1,
    backgroundColor:'#efefef', 
    borderRadius: 10,
    marginRight: 10
  },
  subImage: {
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    borderRadius: 10
  },
  textWrap: {
    flex: 1,
    paddingVertical: 15
  },
  text: {
    fontSize: 13,
    color: '#525252',
    marginBottom: 3,
  }
})

const hashTagStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  hashTag: {
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

export default TimeLine
