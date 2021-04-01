import * as React from 'react'
import { 
  Dimensions,
  ScrollView,
  View, 
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'
import CameraSVG from '../components/svg/cameraSVG'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {actions, getContentCSS, RichEditor, RichToolbar} from '../components/richEditor/index'
// import {actions, getContentCSS, RichEditor, RichToolbar} from 'react-native-pell-rich-editor'

import * as timeLineApi from '../api/timeLine'

const TimeLineDetail = ({navigation}) => {
  const scroll = React.useRef('')
  const [contents, setContents] = React.useState([
    {
      key: 0,
      type: 'text',
      value: ''
    }
  ])
  const [currentImage, setCurrentImage] = React.useState(null)

  // 갤러리 열기
  const showGallery = () => {
    navigation.navigate('gallery', {
      onTakeImage: (data) => takeImageData(data)
    })
  }


  const takeImageData = (data) => {
    
    // if(contents[contents.length - 1].value.length === 0) {
    //   const copyConents = contents
    //   copyConents.splice(contents.length - 1, 1)

    //   setContents(copyConents)
    // }

    const image = {
      type: 'image',
      value: data
    }

    const text = {
      type: 'text',
      value: ''
    }

    setContents((prevState => [
      ...prevState,
      image,
      text
    ]))
  }

  const updateText = (text, index) => {
    let newArr = contents.map((item, i) => {
      return {
        ...item,
        value: i === index ? text : item.value
      }
    })

    setContents(newArr)
  }

  const setImage = () => {
    // showGallery()

    const image = {
      type: 'image',
      value: currentImage
    }
  
    const text = {
      type: 'text',
      value: ''
    }
  
    setContents((prevState => [
      ...prevState,
      image,
      text
    ]))
  }

  const axiosTest = () => {
    // const param = {detail : {
    //   test: 1234, test2: 56567
    // }}
    timeLineApi.setTimeLine(contents).then((result) => {
      console.log('result',result)
    }).catch((error) => {
      console.log(error)
    })
    // console.log('test',typeof JSON.stringify(contents))
  }
  
  return (
    <>
      <ScrollView
        ref={scroll} 
        style={timeLineDetailStyle.container} 
        onContentSizeChange={() => {
          scroll.current.scrollToEnd({animated:true})
        }}
      >
        {
          contents.map((item, index) => {
            if(item.type === 'text') {
              return (
                <TextInput
                  key={index}
                  // placeholder={index === 0 && contents.length === 1 ? '함께했던 순간을 입력해주세요.':''}
                  onChangeText={(text) => updateText(text, index)}
                  multiline
                />
              )
            } 
            else if(item.type === 'image') {
              // const image = item.value && currentImage ? currentImage : require('../test1.jpg')
              return (
                <TouchableOpacity key={index} style={{aspectRatio: 1}}>
                  <Image 
                    source={{uri: item.value}}
                    style={{width:'100%',height:'100%',resizeMode:'cover'}}/>
                  {/* <Image source={require('./test1.jpg')} style={{width:'100%',height:'100%',resizeMode:'cover'}}/> */}
                </TouchableOpacity>
              )
            }
          })
        }
      </ScrollView>
      <View style={toolbarStyle.container}>
        <TouchableOpacity onPress={() => showGallery()} style={toolbarStyle.item}>
          <Image source={require('../assets/images/image.png')} style={toolbarStyle.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={toolbarStyle.item}>
          <Image source={require('../assets/images/video.png')} style={toolbarStyle.icon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => axiosTest()} style={toolbarStyle.item}>
          <Text>test</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}

const timeLineDetailStyle = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
  imageUploadBox: {
    backgroundColor: '#fafafa',
    height: Dimensions.get('window').width * 0.5625,  // 16:9
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const toolbarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#efefef',
    paddingHorizontal: 16
  },
  item: {
    marginLeft: 16
  },
  icon: {
    tintColor: '#39c5bb',
    width: 22,
    height: 22
  }
})
export default TimeLineDetail