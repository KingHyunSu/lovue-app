import * as React from 'react'
import {View, Text, FlatList, Dimensions , StyleSheet} from 'react-native'

function DayItem ({dayInfo}) {
  return (
    <View style={calendarStyle.dayItem}>
      <Text style={[calendarStyle.dayText, dayInfo.isHoliday ? calendarStyle.holidayColor : '']}>{dayInfo.day}</Text>
      <Text style={[calendarStyle.holidayText,calendarStyle.holidayColor]}>
        {dayInfo.holiday_nm === '기독탄신일' ? '크리스마스' : dayInfo.holiday_nm}
      </Text>
    </View>
  )
}

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'ko',
      DAY_OF_WEEK: {
        ['ko']: ['일','월','화','수','목','금','토']
      }
    }
  }

  render() {

    return (
      <View>
        <View style={calendarStyle.dayOfWeekItem}>
          {
            this.state.DAY_OF_WEEK[this.state.lang].map((item) => (
              <View key={item} style={calendarStyle.dayItem}>
                <Text style={calendarStyle.dayText}>{item}</Text>
              </View>
            ))
          }
        </View>

        <FlatList
          numColumns={7}
          data={this.props.dateInfo.daysList}
          keyExtractor={(item) => item.day}
          renderItem={({item}) => <DayItem dayInfo={item}/>}
        />
      </View>
    )
  }
}

const dayBoxWidth = Dimensions.get('window').width / 7

const calendarStyle = StyleSheet.create({
  dayItem: {
    width: dayBoxWidth,
    marginVertical: 4
  },
  dayOfWeekItem: {
    flexDirection: 'row',
    paddingVertical: 8
  },

  
  dayText: {
    textAlign: 'center',
    justifyContent: 'center'
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