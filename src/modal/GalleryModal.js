import * as React from 'react'
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'

const GalleryModal = ({ navigation, route }) => {
  const [albumList, setAlbumList] = React.useState([])
  const [isShowImageUpload, changeShowImageUpload] = React.useState(false)
  const [photoList, setPhotoList] = React.useState([])
  const [activeImage, setActiveImage] = React.useState(null)
  
  React.useEffect(() => {
    // const params = { assetType: 'All' }
    // console.log('CameraRoll.getAlbums(params)',CameraRoll.getAlbums())
    // setAlbumList(CameraRoll.getAlbums(params))
    // getAlbum()
    getPhotos()
  },[])

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      groupTypes: 'Album'
    }).then((r) => {
      setPhotoList(r.edges)
      setActiveImage(r.edges[0].node.image.uri)
    })
  }

  const getAlbum = () => {
    CameraRoll.getAlbums({
      assetType: 'Photos'
    }).then((album) => {
      setAlbumList(album)
    })
  }

  // 여기서 image change? 여기서 인덱스 값 바꾸고 useEffect로 change?
  const clickImage = (imageURI) => {
    setActiveImage(imageURI)
    
    route.params.onTakeImage(imageURI)
    navigation.goBack()
  }

  const ImageItem = (prop) => {
    // console.log(JSON.stringify(prop))
    return (
      <TouchableOpacity onPress={() => clickImage(prop.imageURI)} style={{width:'33%', height:120}}>
        <Image
          style={{width:'100%', height:'100%'}}
          source={{ uri: prop.imageURI }}
        />
      </TouchableOpacity>
    )
  }
  // p.node.image.uri
  return (
    <View>
      <View style={{width:'100%', height:300}}>
        <Image style={{width:'100%', height:'100%'}} source={{uri: activeImage}}/>
      </View>
      <FlatList
        numColumns={3}
        data={photoList}
        keyExtractor={(item) => item.node.timestamp}
        renderItem={({item}) => <ImageItem imageURI={item.node.image.uri} />}>

      </FlatList>
    </View>
  )
}

export default GalleryModal