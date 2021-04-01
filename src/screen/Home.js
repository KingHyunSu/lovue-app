import * as React from 'react'
import {View, Image, Text, FlatList, StyleSheet} from 'react-native'

const Home = () => {
  const tempData = [
    {
      id: 't1',
      title: 'test1',
      comments: 1,
    },
    {
      id: 't2',
      title: 'test2',
      comments: 0,
    },
    {
      id: 't3',
      title: 'test3',
      comments: 3,
    },
    {
      id: 't4',
      title: 'test2',
      comments: 5,
    },
    {
      id: 't5',
      title: 'test3',
      comments: 0,
    },
  ]

  const renderItem = () => {
    return (
      <View style={imageCardStyle.container}>
        <View style={{position:'relative'}}>
          <Image
            style={imageCardStyle.image}
            resizeMode={'cover'}
            blurRadius={1}
            source={require('./optimize.jpg')}></Image>
          <View style={{position: 'absolute', width:'100%',height:'100%', paddingHorizontal: 10, paddingVertical:30}}>
            <Text style={{color:'#586874', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
            테스트 글자테스트 글자테스트 글자테스트 글자테스트 글자
            </Text>
            <Text style={{color:'#586874', textAlign: 'center', fontSize: 16, marginTop: 15}}>
            테스트 글자테스트 글자테스트 글자테스트 글자테스트 a글자테스트
              글자
            </Text>
          </View>

          <View style={{position:'absolute', bottom:0, flexDirection:'row', padding:10}}>
            <View style={[HomeStyle.hashLabel, HomeStyle.pinkLabel]}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#ffffff',
                  fontWeight: '700',
                }}>
                #꽃구경
              </Text>
            </View>
            <View style={[HomeStyle.hashLabel, HomeStyle.orangeLabel]}>
              <Text style={{fontSize: 11, color: '#ffffff', fontWeight: '700'}}>
                #데이트
              </Text>
            </View>
            <View style={HomeStyle.hashLabel}>
              <Text style={{fontSize: 11, color: '#ffffff', fontWeight: '700'}}>
                #여행
              </Text>
            </View>
          </View>
        </View>


        <View style={imageCardStyle.footer}>
          <Image
            style={HomeStyle.avator}
            resizeMode={'cover'}
            source={require('./test.jpg')}/>
          <View style={{marginLeft: 5, justifyContent: 'center'}}>
            <Text style={{fontSize: 13, color: 'black'}}>최유정</Text>
            <Text style={{color: '#9e9e9e', fontSize: 10, textAlign: 'center'}}>
              2020.08.12
            </Text>
          </View>

          <View
            style={{
              width: 55,
              height: 30,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
              borderWidth: 1,
              borderColor: '#808080',
            }}>
            <Text style={{fontSize: 12, color: '#808080'}}>공유하기</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={HomeStyle.container}>
      <FlatList
        data={tempData}
        renderItem={renderItem}
        keyExtracto={(item) => item.id}
      />
    </View>
  )
}

const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },

  listContainer: {},

  itemContainer: {
    borderColor: '#efefef',
    paddingVertical: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  avator: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imageSection: {
    width: '100%',
    height: 250,
  },

  textSection: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },

  hashLabel: {
    backgroundColor: '#efefef',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 5,
  },

  pinkLabel: {
    backgroundColor: 'pink',
  },
  orangeLabel: {
    backgroundColor: 'orange',
  },
})

const imageCardStyle = StyleSheet.create({
  container: {
    // borderColor: '#efefef',
    // borderWidth: 1,
    marginVertical: 15,
    marginHorizontal: 12,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: '#fff'
  },

  image: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  footer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})

export default Home