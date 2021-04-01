import 'react-native-gesture-handler'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text} from 'react-native'

import calendarConfig from './src/components/schedule/calendar/config/calendarConfig'

import TimeLine from './src/screen/TimeLine'
import TimeLine2 from './src/screen/TimeLine2'
import TimeLineDetail from './src/screen/TimeLineDetail'
import homeScreen from './src/screen/homeScreen'
import homeScreen2 from './src/screen/HomeScreen2'
import Home from './src/screen/Home'
import CreateTimeLineScreen from './src/screen/CreateTimeLineScreen'
import CalendarScreen from './src/screen/CalendarScreen'

// test
import Test from './src/screen/Test'

import { PermissionsAndroid, Platform } from 'react-native'

// modal
import GalleryModal from './src/modal/GalleryModal'

// fcm
import { Alert } from 'react-native'
import messaging from '@react-native-firebase/messaging'

// icon
import HomeSVG from './src/components/svg/homeSVG'
import CalendarSVG from './src/components/svg/calendarSVG'
import AddSVG from './src/components/svg/plusCircleSVG'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

calendarConfig()

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

  const hasPermission = await PermissionsAndroid.check(permission)
  if (hasPermission) {
    return true
  }

  const status = await PermissionsAndroid.request(permission)
  return status === 'granted'
}

const HomeIcon = () => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <HomeSVG/>
    </View>
  )
}

const MainNavi = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel:false}}>
      <Tab.Screen name="TimeLine" component={TimeLine} />
      <Tab.Screen name="home2" component={Home} />
      <Tab.Screen
        name="plus"
        component={CreateTimeLineScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <AddSVG />
          )
        }} />
      <Tab.Screen 
        name="타임라인"
        component={homeScreen2}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeSVG />
          )
        }}/>
      <Tab.Screen 
        name="test"
        component={TimeLine2}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeSVG />
          )
        }}/>
      <Tab.Screen 
        name="일정"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <CalendarSVG />
          )
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  React.useEffect(() => {
    hasAndroidPermission()

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage))
    })

    return unsubscribe
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={MainNavi} />
        <Stack.Screen name="gallery" component={GalleryModal}/>
        <Stack.Screen name="main2" component={Home} />
        <Stack.Screen name="TimeLineDetail" component={TimeLineDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
