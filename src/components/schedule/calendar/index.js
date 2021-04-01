import * as React from 'react'
import {View, Text, FlatList, Dimensions,TouchableOpacity, StyleSheet} from 'react-native'

import LeftArrowSVG from '../../svg/arrow/leftArrowSVG'
import RightArrowSVG from '../../svg/arrow/rightArrowSVG'

function DayItem ({dayInfo, todayObj}) {
  return (
    <TouchableOpacity style={calendarStyle.item}>
      <View style={calendarStyle.test}>
        
        <Text style={[
          calendarStyle.dayText,
          dayInfo.isHoliday ? calendarStyle.holidayColor : calendarStyle.dayColor,
          dayInfo.dateString === todayObj.dateString && dayInfo.day === todayObj.day ? calendarStyle.today : ''
        ]}>
          {dayInfo.day}
          {/* {JSON.stringify(todayObj.dateString)} */}
        </Text>
      </View>
      {/* todo 일정 or 휴일 없으면 처음부터 안그려야 높이 조절됨*/}
      <Text style={[calendarStyle.holidayText,calendarStyle.holidayColor]}>
        {dayInfo.holiday_nm === '기독탄신일' ? '크리스마스' : dayInfo.holiday_nm}
      </Text>
    </TouchableOpacity>
  )
}

const DAY_OF_WEEK = {
  ['ko']: ['일','월','화','수','목','금','토']
}
const lang = 'ko'

const Calendar = ({todayObj, year, month, holidayList, onChangeMonth}) => {
  const [daysList, setDaysList] = React.useState([])

  React.useEffect(() => {
    // m => mm
    const monthFmt = month < 10 ? `0${month}` : `${month}`
    
    // 해당 월의 마지막 일
    const maxDays = new Date(year, month, 0).getDate()
    // 해당 월의 첫 요일
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay()
    
    let dayOfWeek = firstDayOfWeek - 1
  
    
    const currentMonthDaysList = []
    // 해당 월의 일수 
    for(let i = 0; i < maxDays; i++) {
      if(dayOfWeek > 6) {
        dayOfWeek = 0
      }

      dayOfWeek += 1

      currentMonthDaysList.push({
        dateString: `${year}-${monthFmt}`,
        day: i + 1, 
        dayOfWeek: dayOfWeek
      })
    }

    let daysList = currentMonthDaysList

    // 요일 위치 맞추기
    if(firstDayOfWeek > 0) {
      // 전 달의 마지막 일
      const lastMonthMaxDays = new Date(year, month - 1, 0).getDate() - firstDayOfWeek + 1
      const lastMonthEdgeDaysList = []
      const prevMonthFmt =  month - 1 < 10 ? `0${month - 1}` : `${month - 1}`
      for(let i = 0; i < firstDayOfWeek; i++) {
        lastMonthEdgeDaysList.push({
          dateString: `${year}-${prevMonthFmt}`,
          day: lastMonthMaxDays + i,
          dayOfWeek: dayOfWeek + i
        })
      }

      if(lastMonthEdgeDaysList.length > 0) {
        daysList = lastMonthEdgeDaysList.concat(currentMonthDaysList)
      }
    }

    console.log('daysList',daysList)

    
    // 휴일 넣기
    // const thisDateString = `${year}-${monthFmt}`
    // const thisMonthHoliday = holidayList.filter((item) => {
    //   return item.dateString === thisDateString
    // })

    holidayList.forEach((item) => {
      daysList.forEach((sItem) => {
        if(item.dateString === sItem.dateString && item.day === sItem.day) {
          sItem.isHoliday = true 
          sItem.holiday_nm = item.name
        }
      })
    })

    if(daysList.length > 0) {
      setDaysList(daysList)
    }
  }, [year, month, holidayList])

  const clickPrev = () => {
    const pageMonth = month - 1
    onChangeMonth(pageMonth)
  }
  const clickNext = () => {
    const pageMonth = month + 1
    onChangeMonth(pageMonth)
  }
  return (
    <View style={calendarStyle.container}>
      {/* calendar header */}
      <View style={calendarNaviStyle.container}>
        <TouchableOpacity style={calendarNaviStyle.naviBtn}
          onPress={() => clickPrev()}>
          <LeftArrowSVG color={'#39c5bb'}/>
        </TouchableOpacity>

        <View style={calendarNaviStyle.dateTextBox}>
          <Text style={calendarNaviStyle.dateText}>{year}년</Text>
          <Text style={calendarNaviStyle.dateText}>{month}월</Text>
        </View>
        <TouchableOpacity style={[calendarNaviStyle.naviBtn, {alignItems:'flex-end'}]} 
          onPress={() => clickNext()}>
          <RightArrowSVG color={'#39c5bb'}/>
          {/* <RightArrowSVG color={'#2ac1bc'}/> */}
        </TouchableOpacity>
      </View>

      {/* calendar day of week */}
      <View style={calendarStyle.dayOfWeekItem}>
        {
          DAY_OF_WEEK[lang].map((item) => (
            <View key={item} style={calendarStyle.item}>
              <Text style={calendarStyle.dayOfWeekText}>{item}</Text>
            </View>
          ))
        }
      </View>

      {/* calendar days */}
      <FlatList
        numColumns={7}
        data={daysList}
        keyExtractor={(item) => item.day}
        renderItem={({item}) => <DayItem dayInfo={item} todayObj={todayObj}/>}
      />
    </View>
  )
}

const itemWidth = Dimensions.get('window').width / 7

const calendarNaviStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 15
  },
  naviBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  dateTextBox: {
    flexDirection: 'row' 
  },
  dateText: {
    marginHorizontal: 4,
    fontSize: 16,
    color: '#586874'
  }
})

const calendarStyle = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },

  item: {
    width: itemWidth,
    alignItems: 'center'
  },

  today: {
    borderRadius: 20,
    // todo 나중에 색깔 찍어서 헥사값으로 설정하기
    backgroundColor: 'rgba(57,197,187,0.75)',
    // backgroundColor: '#70d7c7',
    color: '#ffffff'
  },


  dayText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 25,
    height: 25
  },
  dayColor: {
    color: '#586874'
  },

  dayOfWeekItem: {
    flexDirection: 'row',
    marginBottom: 15
  },
  dayOfWeekText: {
    color: '#b6c1cd'
  },

  holidayText: {
    fontSize: 10,
    textAlign: 'center'
  }, 
  holidayColor: {
    color: 'red'
  }
})

export default Calendar