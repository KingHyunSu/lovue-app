import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const TimeLineSidebar = () => {
  return (
    <View style={TimeLineSideBarStyle.container}>
      <View>
        <Text>1</Text>
      </View>
    </View>
  )
}

const TimeLineSideBarStyle = StyleSheet.create({
  container: {
    width: 30,
    height: 300,
    backgroundColor: 'blue',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
})

export default TimeLineSidebar
