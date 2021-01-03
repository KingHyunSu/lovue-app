import 'react-native-gesture-handler'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text} from 'react-native'

import calendarConfig from './src/components/calendar/config/calendarConfig'

import TimeLineScreen from './src/screen/timeLineScreen'
import homeScreen from './src/screen/homeScreen'
import homeScreen2 from './src/screen/HomeScreen2'
import CreateTimeLineScreen from './src/screen/CreateTimeLineScreen'
import CalendarScreen from './src/screen/CalendarScreen'

import { PermissionsAndroid, Platform } from 'react-native'

// modal
import GalleryModal from './src/modal/GalleryModal'

// fcm
import { Alert } from 'react-native'
import messaging from '@react-native-firebase/messaging'

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

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  )
}

const MainNavi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={TimeLineScreen} />
      <Tab.Screen name="home2" component={homeScreen} />
      <Tab.Screen name="plus" component={CreateTimeLineScreen} />
      <Tab.Screen name="타임라인" component={homeScreen2} />
      <Tab.Screen name="일정" component={CalendarScreen} />
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
