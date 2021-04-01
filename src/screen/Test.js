import * as React from 'react'
import { 
  Dimensions,
  ScrollView,
  View, 
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'

const Test = () => {
  const [content, setContent] = React.useState('')
  return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1, backgroundColor:'black'}}>

      </ScrollView>

      <TextInput multiline={true} onChange={(text) => setContent(text)}/>
    </View>
  )
}

export default Test