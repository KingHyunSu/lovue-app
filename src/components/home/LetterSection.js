import React from 'react'
import {Dimensions, View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native'
import RightArrowSVG from '../svg/arrow/rightArrowSVG'

const LetterSection = () => {
  return (
    <View style={letterStyle.container}>
      <View style={letterStyle.header}>
        <Text style={letterStyle.title}>편지</Text>
        <RightArrowSVG color={'#333'}></RightArrowSVG>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* aspectRatio:1, width:'100%', height:undefined */}

        <View>
          <ImageBackground style={letterStyle.item}  imageStyle={{ borderRadius: 10}} source={require('./KakaoTalk_20210213_175531639.jpg')}>
            <Text style={{color:'#fff'}}>2021.02.13</Text>
          </ImageBackground>
        </View>

        <View style={letterStyle.item}>
        </View>
      </ScrollView>
    </View>
  )
}

const letterStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 12
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16
  },
  title: {
    fontSize: 18
  },

  contents: {
    // flexDirection: 'row',
    // height: 180,
  },
  
  item: {
    width: Dimensions.get('window').width / 1.4,
    height: Dimensions.get('window').width / 2.3,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 22,
    marginLeft: 16,
    padding: 7,
    // elevation: 2,
    borderWidth: 1,
    borderColor: '#efefef'
  }
})

export default LetterSection