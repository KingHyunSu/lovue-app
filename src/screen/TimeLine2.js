import * as React from 'react'
import {Dimensions, 
  View, Image, ImageBackground,  Text, TouchableOpacity, FlatList, ScrollView, StyleSheet} from 'react-native'
import DoubleQuarterTopSVG from '../components/svg/doubleQuarterTopSVG'
import DoubleQuarterBottomSVG from '../components/svg/doubleQuarterBottomSVG'
import PlusSVG from '../components/svg/plusCircle2'

import RightArrowSVG from '../components/svg/arrow/rightArrowSVG'
import * as timeLineApi from '../api/timeLine'

import LetterSection from '../components/home/LetterSection'

const TimeLine = ({navigation}) => {
  const tempData = [
    {
      id: 't12',
      title: 'test1',
      comments: 1,
    },
    {
      id: 't22',
      title: 'test2',
      comments: 0,
    },
    {
      id: 't32',
      title: 'test3',
      comments: 3,
    },
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
  const tempData2 = [
    {
      id: '1'
    },
    {
      id: '2'
    }
  ]

  const TimeLineHeader = () => {
    return (
      <View style={{marginBottom:12,backgroundColor:'#efefef'}}>
        <View style={{ height:200,backgroundColor:'#fff',marginBottom:12}}>
          <View style={homeHeaderStyle.registSection}>

          </View>
        </View>
        <LetterSection/>
      </View>
    )
  }
  React.useEffect(() => {
    // console.log('useEffect호출')
    // timeLineApi.getTimeLine().then((result) => {
    //   console.log('test',result)
    // }).catch((error) => {
    //   console.log('error',error)
    // })
    // /timeline/select1
  },[])
  const renderItem = ({item, index}) => {
    switch (index) {
      case 0:
        return (
          <View style={{backgroundColor:'#efefef',marginBottom:12}}>
            <View style={{ height:180,backgroundColor:'#fff'}}>
            </View>
          </View>
        )
      case 1: 
        return (
          <LetterSection/>
        )
      case 2:
        return (
          <View style={homeHeaderStyle.registSection}>
            <Text>타임라인</Text>
            <TouchableOpacity style={homeHeaderStyle.registBtn} onPress={() => navigation.navigate('TimeLineDetail')}>
              <Text style={homeHeaderStyle.registBtnText}>등록하기</Text>
            </TouchableOpacity>
          </View>
        )
    }

    return (
      <View style={timeLineContentStyle.container}>
        {/* header */}
        <View style={timeLineHeaderStyle.container}>
          <Image
            style={timeLineHeaderStyle.avator}
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
        </View>

        {/* content */}
        <View style={timeLineContentStyle.textWrap}>
          <Text
            style={timeLineContentStyle.text}
            numberOfLines={3}>
              테스트 글자테스트 글자테스트 글자테스트 글자테스트 글자
              테스트 글자테스트 글자테스트 글자테스트 글자테스트 a글자테스트
              글자
          </Text>
        </View>

        <Image
          style={timeLineContentStyle.image}
          resizeMode={'cover'}
          source={require('./optimize.jpg')}></Image>
      </View>
    )
  }
  return (
    <View style={timeLineStyle.container}>
      {/* <View style={{height:200, marginBottom: 20, backgroundColor:'#fff'}}>

      </View> */}
      {/* 편지 section */}
    

      {/* 타임라인 section */}
      <FlatList
        style={{backgroundColor:'#efefef'}}
        data={tempData}
        renderItem={renderItem}
        stickyHeaderIndices={[2]}
        keyExtractor={(item) => item.id}
        // ListHeaderComponent={TimeLineHeader}
      />
      {/* 작은 화면에서는 미니 FAB를 사용해야합니다. 화면 너비가 460dp 이하인 경우 기본 FAB (56dp)의 컨테이너는 미니 크기 (40dp)로 변환되어야합니다 */}
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('TimeLineDetail')} 
        style={{width:56,height:56,borderRadius:50,backgroundColor:'purple',position:'absolute',right:16,bottom:16}}>

      </TouchableOpacity> */}
    </View>
  )
}

const pageMargin = 16
const homeHeaderStyle = StyleSheet.create({
  registSection: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: pageMargin
  },
  registBtn: {
    width: 70,
    height: 32,
    backgroundColor: 'rgba(57,197,187,0.75)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registBtnText: {
    color: '#fff'
  }
})
const timeLineStyle = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
  },

  listContainer: {},
})

const timeLineHeaderStyle = StyleSheet.create({
  container: {
    // marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  userInfoBox: {
    marginBottom: 5
  },
  avator: {
    width: 40,
    height: 40,
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
    backgroundColor: '#fff',
    paddingHorizontal: pageMargin,
    paddingVertical: 22,
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

  textWrap: {
    flex: 1,
    paddingVertical: 12
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
