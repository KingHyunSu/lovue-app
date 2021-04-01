import React from 'react'
import { View } from 'react-native'
import Svg, {Path} from 'react-native-svg'

function HomeSVG() {
  return (
    <View style={{aspectRatio:1, padding:8}}>
      <Svg width="100%" height="100%" viewBox="0 0 512 512">
        <Path
          strokeWidth="32"
          fill="gray"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
        ></Path>
        <Path
          strokeWidth="32"
          fill="red"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
        ></Path>
      </Svg>
    </View>
  )
}

export default HomeSVG
