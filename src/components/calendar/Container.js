import React from 'react'
import {ScrollView,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity, 
  TextInput,
  StyleSheet,
  Easing} from 'react-native'
import {timeStampFilter} from '../../utils/common'
import axios from 'axios'

import Calendar from './Calendar'
import Schedule from './Schedule'
import ScheduleItem from './ScheduleItem'

// icon
import PlusSVG from '../svg/plusSVG'
import BottomArrowSVG from '../svg/arrow/bottomArrowSVG'

const DATA = [
  {
    
  },
  {
    id: '',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

const HEADER_MAX_HEIGHT = 370
const HEADER_MIN_HEIGHT = 50
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

class CalendarViewer extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeMonth  = this.handleChangeMonth.bind(this)
    this.onSpin = this.onSpin.bind(this)
    this.state = {
      todayObj: null,
      pageYear: 0,
      pageMonth: 0,
      holidayList: null,

      calendar_max_height: 0,
      calendar_min_height: 50,
      scrollY: new Animated.Value(0),
      spinValue: new Animated.Value(0),
      expandValue: new Animated.Value(0),

      isShowCreateScheduleForm: false,

      schduleData: {
        title: ''
      }
    }
  }

  async componentDidMount() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDate()

    // todo month 포맷 공통 필터로 빼기
    const monthFrm = currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`
    const today = {
      dateString: `${currentYear}-${monthFrm}`,
      day: currentDay
    }

    await this.getHolidayList(currentYear)
    
    this.setState({
      todayObj: today,
      pageYear: currentYear,
      pageMonth: currentMonth
    })
  }

  async handleChangeMonth(month) {
    let pageYear = this.state.pageYear
    let pageMonth = month
    if(month < 1) {
      pageYear = pageYear - 1
      pageMonth = 12

      await this.getHolidayList(pageYear)
    } else if (month > 12) {
      pageYear = pageYear + 1
      pageMonth = 1
      await this.getHolidayList(pageYear)
    }
    this.setState({
      pageYear: pageYear,
      pageMonth: pageMonth
    })
  }

  getHolidayList(year) {
    const key = 'Z1dX1c7SZ1tJgNke8ckBCRAZZsxTgUA%2BrjpwbYVXSNN%2BAv%2FhIPuxOOqRlDIkIBD%2Fi2ifp733QJ%2FG1mT67u53vw%3D%3D'

    axios.get(`http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${year}&ServiceKey=${key}&numOfRows=${100}`).then((result) =>{
      const resultData = result.data.response.body.items.item
      const holidayObj = resultData.map((item) => {
        const date = String(item.locdate)
        const dateString = `${date.substr(0,4)}-${date.substr(4,2)}`
        const day = Number(date.substr(6,2))
        
        return {
          dateString: dateString,
          day: day,
          name: item.dateName
        }
      })

      this.setState({
        holidayList: holidayObj
      })
    }).catch(() => {})
  }

  hexToRgbA(hex){
    let c
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('')
      if(c.length== 3){
        c= [c[0], c[0], c[1], c[1], c[2], c[2]]
      }
      c= '0x'+c.join('')
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.07)'
    }
    throw new Error('Bad Hex')
  }

  async onSpin() {
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start()

    await this.setState({isShowCreateScheduleForm: !this.state.isShowCreateScheduleForm})

    this.onExpand()
  }

  onExpand() {
    if(this.state.isShowCreateScheduleForm) {
      console.log('wee',this.state.isShowCreateScheduleForm)
      Animated.timing(
        this.state.expandValue,
        {
          toValue: 300,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false
        }
      ).start()
    }else {
      Animated.timing(
        this.state.expandValue,
        {
          toValue: 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false
        }
      ).start()
    }
  }

  schedule() {
    const data = [
      {
        title: '일정명 테스트 1 일정명 테스트 1 일정명 테스트 1',
        color: '#0297d9',
        time: null
      },
      {
        title: '일정명 테스트 2',
        color: '#FF8DA4',
        time: null
      }
    ]

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'] 
    })

    return (
      <View style={schduleStyle.container}>
        {/* schedule header */}
        <View style={schduleStyle.header}>
          <Text style={schduleStyle.headerText}>일정</Text>
          <TouchableOpacity onPress={this.onSpin} style={{width:40, height:40, borderRadius: 50, backgroundColor:'#39c5bb', justifyContent:'center', alignItems:'center'}}>
            <Animated.View style={{transform: [{rotate: spin}]}}>
              <PlusSVG/>
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* schedule item  */}
        {/* <ScheduleItem></ScheduleItem> */}
        {data.map((item, index) =>
          <View key={index} style={[schduleStyle.item, {backgroundColor: this.hexToRgbA(item.color)}]}>
            <Image
              style={schduleStyle.avator}
              resizeMode={'cover'}
              source={require('./test.jpg')}></Image> 
            <View style={{flex:1}}>
              <View style={{alignItems:'flex-end',marginBottom:3}}>
                <BottomArrowSVG color={item.color}/>
              </View>
              <Text style={[schduleStyle.scheduleText, schduleStyle.title]}>{item.title}</Text>
              <Text style={schduleStyle.scheduleText}>{item.time ? item.time : '시간 없음'}</Text>
            </View>
          </View>
        )}
      </View>
    )
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    })

    const {holidayList} = this.state
  
    if(!holidayList) {
      return null
    }
    return (
      <View style={{flex:1}}>
        <ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {
              contentOffset: {
                y: this.state.scrollY
              }
            }}],
            {useNativeDriver: false}
          )}
        >
          {this.schedule()}
        </ScrollView>
        <Animated.View
          style={{position:'absolute', top: 0, overflow:'hidden', height: headerHeight}}
        >
          <Calendar
            todayObj={this.state.todayObj}
            year={this.state.pageYear}
            month={this.state.pageMonth}
            holidayList={this.state.holidayList}
            onChangeMonth={this.handleChangeMonth}/>
        </Animated.View>
      </View>
    )
  }
}

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
    flex: 1,
    flexDirection: 'row',
    // paddingVertical: 20,
    // paddingHorizontal: 15,
    padding: 18,
    marginVertical: 10,
    minHeight: 70,
    borderRadius: 15,
  },
  avator: {
    width:60,
    height:60, 
    borderRadius:30,
    marginRight: 20, 
    alignSelf: 'center'
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

export default CalendarViewer
