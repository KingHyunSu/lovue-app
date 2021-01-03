import * as React from 'react'
import {View, Text, Image, FlatList, StyleSheet} from 'react-native'

const StatusBox = () => {
  return <View style={StatusBoxStyle.container}></View>
}

const StatusBoxStyle = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    marginVertical: 28,
    height: 100,
    borderWidth: 1,
    borderColor: 'blue',

    // backgroundColor: '#efefef',
  },
})

export default StatusBox
