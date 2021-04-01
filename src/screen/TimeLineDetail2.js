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

const TimeLineDetail = ({navigation}) => {
  const [contents, setContents] = React.useState('')
  const [imageData, setImageData] = React.useState('')
  const richText = React.useRef()

  const content = React.useRef('')

  const showGallery = () => {
    navigation.navigate('gallery')
  }
  const takeImageData = (data) => {
    console.log(data)
    // richText.current?.insertImage(`data:image/jpg;base64,${data}`)
    richText.current?.insertImage(data)
  }
  const onPressAddImage = () => {
    navigation.navigate('gallery', {
      onTakeImage: (data) => takeImageData(data)
    })
    // richText.current?.insertImage(
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
    //   'background: red;',
    // )
  }
  
  return (
    <View style={timeLineDetailStyle.container}>
        {/* <TouchableOpacity style={timeLineDetailStyle.imageUploadBox} onPress={() => showGallery()}>
          <View style={{width:80, height:80}}>
          <CameraSVG></CameraSVG>
          </View>
        </TouchableOpacity> */}
        {/* <View style={{height:200}}> */}
        <ScrollView style={{flexGrow:1}}>
        <KeyboardAvoidingView style={{flex:1}} behavior={'padding'} enabled={true}>

        <RichEditor
          ref={richText}
          onChange={(text) => setContents(text)}
          useContainer={true}
          placeholder={'내용을 입력해주세요'}
          />
        </KeyboardAvoidingView>
          </ScrollView>
          {/* </View> */}
        {/* initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'} */}

     
      <RichToolbar
        editor={richText}
        	actions={
          [
            actions.setBold,
            actions.insertImage
          ]
        }
        onPressAddImage={() =>  onPressAddImage()}/>
        
    </View>
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

export default TimeLineDetail