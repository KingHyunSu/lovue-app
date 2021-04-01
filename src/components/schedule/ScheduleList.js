import * as React from 'react'
import {FlatList, View, Text,TouchableOpacity,Image, StyleSheet} from 'react-native'
// icon
import PlusSVG from '../svg/plusSVG'
import BottomArrowSVG from '../svg/arrow/bottomArrowSVG'


const ScheduleList = () => {
  const data = [
    {
      title: '일정명 테스트 1 일정명 테스트 1 일정명 테스트 1 테스트트트트',
      color: '#0297d9',
      time: null
    },
    {
      title: '일정명 테스트 2',
      color: '#FF8DA4',
      time: null
    }
  ]

  return (
    <View style={schduleStyle.container}>
      {/* schedule header */}
      <View style={schduleStyle.header}>
        <Text style={schduleStyle.headerText}>일정</Text>
        {/* todo #2ac1bc 참고 */}
        <TouchableOpacity style={{width:40, height:40, borderRadius: 50, backgroundColor:'#39c5bb', justifyContent:'center', alignItems:'center'}}>
          <PlusSVG/>
        </TouchableOpacity>
      </View>

      {/* schedule item  */}
      {data.map((item, index) =>
        // <View key={index} style={[schduleStyle.item, {backgroundColor: this.hexToRgbA(item.color)}]}>
        <View key={index} style={schduleStyle.item}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginBottom:12}}>
            <Image
              style={schduleStyle.avator}
              resizeMode={'cover'}
              source={require('./test.jpg')}></Image> 
            <View style={{marginBottom:3}}>
              <BottomArrowSVG color={item.color}/>
            </View>
          </View>
          <Text style={[schduleStyle.scheduleText, schduleStyle.title]}>{item.title}</Text>
          <Text style={schduleStyle.scheduleText}>{item.time ? item.time : '시간 없음'}</Text>
        </View>
      )}
    </View>
  )
}
const HEADER_MAX_HEIGHT = 370

const schduleStyle = StyleSheet.create({
  container: {
    marginTop: HEADER_MAX_HEIGHT,
    paddingVertical: 20,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: '#efefef',
    backgroundColor: '#ffffff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  headerText: {
    fontSize: 17
  },

  item: {
    // flex: 1,
    // paddingVertical: 10,
    // paddingHorizontal: 15,
    padding: 15,
    marginVertical: 10,
    minHeight: 70,
    borderRadius: 20,
    backgroundColor: '#f8f9fd'
  },
  avator: {
    width:20,
    height:20, 
    borderRadius:10
  },
  itemBar: {
    width: 2,
    height: '100%',
    borderRadius: 2,
    marginLeft: 1,
    marginRight: 20,
    overflow: 'hidden'
  },
  scheduleText: {
    color: '#586874',
    marginBottom: 3
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  timeText: {
    color: '#586874'
  }
})

export default ScheduleList
