import * as React from 'react'
import { 
  Dimensions,
  ScrollView,
  View, 
  Text,
  TouchableOpacity, 
  Image,
  StyleSheet
} from 'react-native'
import CameraSVG from '../components/svg/cameraSVG'

const CreateTimeLineScreen = ({navigation}) => {
  const showGallery = () => {
    navigation.navigate('gallery')
  }
  return (
    <ScrollView style={TimeLineDetailStyle.container}>
      <TouchableOpacity style={TimeLineDetailStyle.imageUploadBox} onPress={() => showGallery()}>
        <View style={{width:80, height:80}}>
          <CameraSVG></CameraSVG>
        </View>
        {/* <Text>사진을 넣어주세요</Text> */}
      </TouchableOpacity>

      <View>
        <Text>입력해주세요.</Text>
      </View>
    </ScrollView>
  )
}

const TimeLineDetailStyle = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  imageUploadBox: {
    backgroundColor: '#fafafa',
    height: Dimensions.get('window').width * 0.5625,  // 16:9
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CreateTimeLineScreen