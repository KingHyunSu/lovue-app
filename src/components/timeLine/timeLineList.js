import * as React from 'react'
import {View, Text, Image, FlatList, StyleSheet} from 'react-native'
import LineSVG from '../svg/lineSVG'
import CommentSVG from '../svg/commentSVG'
import StatusBox from './statusBox'
const TimeLineList = () => {
  const [contentWidth, setContentWidth] = React.useState(0)

  const onLayout = (event) => {
    const paddingRight = 14
    setContentWidth(event.nativeEvent.layout.width - paddingRight)
  }

  const testData = [
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

  const renderItem = ({index, item}) => {
    const isEven = !!(index % 2 === 1)
    const imgCircleHalf = 75
    const curveArea = 41
    const lineCenter = contentWidth - imgCircleHalf

    // padding 양쪽 값
    const OddH = contentWidth - imgCircleHalf - curveArea - 28
    // padding 한쪽 값
    const EvenH = imgCircleHalf + curveArea + 14

    return (
      <View style={TimeLineItemStyle.container}>
        <LineSVG
          fullWidth={contentWidth}
          m={isEven ? lineCenter : contentWidth - lineCenter}
          h={isEven ? EvenH : OddH}
          s={isEven ? -55.5 : 55.5}
        />

        <View
          style={[
            TimeLineItemStyle.item,
            isEven ? TimeLineItemStyle.rightItem : TimeLineItemStyle.leftItem,
          ]}>
          {/* 이미지 영역 */}
          <View style={{position: 'relative'}}>
            <Image
              style={TimeLineItemStyle.circleImg}
              source={require('./test.jpg')}></Image>
            <View style={{position: 'absolute', bottom: -5, right: 0}}>
              {item.comments !== 0 ? (
                <CommentSVG comments={item.comments} />
              ) : null}
            </View>
          </View>
          {/* 텍스트 영역 */}
          <View style={{width: 150}}>
            <Text
              numberOfLines={2}
              style={{textAlign: 'center', color: '#9e9e9e', marginTop: 10}}>
              2020.08.20
            </Text>
            <Text numberOfLines={2} style={{fontSize: 16, color: '#525252'}}>
              테스트글자테스트글자테스트글자테스트글자
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={TimeLineStyle.container} onLayout={onLayout}>
      <FlatList
        data={testData}
        ListHeaderComponent={StatusBox}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const TimeLineStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    // paddingLeft: 28,
    // paddingRight: 14,
    flex: 1,
  },
})

const TimeLineItemStyle = StyleSheet.create({
  container: {
    // info 여기 height 조절하면 svg height도 조절해줘야함
    height: 200,
  },
  item: {
    position: 'absolute',
  },
  leftItem: {
    left: 0,
    alignItems: 'flex-start',
  },
  rightItem: {
    right: 0,
    alignItems: 'flex-end',
  },
  circleImg: {
    width: 150,
    height: 150,
    // borderWidth: 5,
    borderColor: '#efefef',
    borderRadius: 75,
  },
})

export default TimeLineList
