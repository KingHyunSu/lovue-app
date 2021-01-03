import * as React from 'react'
import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native'
import StatusBox from '../components/timeLine/statusBox'
import TimeLineSidebar from '../components/timeLine/timeLineSidebar'
import TimeLineList from '../components/timeLine/timeLineList'

const TimeLineScreen = () => {
  return (
    <SafeAreaView style={TimeLineScreenStyle.container}>
      {/* <StatusBox /> */}
      <View style={TimeLineScreenStyle.wrap}>
        {/* <TimeLineSidebar /> */}
        <TimeLineList />
      </View>
    </SafeAreaView>
  )
}
const TimeLineScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  wrap: {
    flexDirection: 'row',
  },
})

export default TimeLineScreen
