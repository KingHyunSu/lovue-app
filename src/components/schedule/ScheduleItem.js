import * as React from 'react'
import {View, Text, Image, TextInput ,Animated, StyleSheet} from 'react-native'

const ScheduleItem = () => {
  if(this.state.isShowCreateScheduleForm) {
    const expand = this.state.expandValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300] 
    })
    return (
      <Animated.View style={[schduleStyle.item, {height: this.state.expandValue, backgroundColor: '#efefef'}]}>
        <Image
          style={schduleStyle.avator}
          resizeMode={'cover'}
          source={require('./test.jpg')}></Image> 
        <View style={{flex:1}}>
          <View style={{alignItems:'flex-end',marginBottom:3}}>
            {/* <BottomArrowSVG color={item.color}/> */}
          </View>
          <TextInput onChangeText={this.setState(this.state.schduleData.title)} value={this.state.schduleData.title}/>
        </View>
      </Animated.View>
    )
  }
  return 
}

const schduleStyle = StyleSheet.create({
  container: {
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

export default ScheduleItem