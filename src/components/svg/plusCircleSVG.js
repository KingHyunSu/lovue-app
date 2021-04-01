import React from 'react'
import { View } from 'react-native'
import Svg, {G, Path} from 'react-native-svg'

function Icon() {
  return (
    <Svg height="24" width="24" viewBox="0 0 416 416">
      <G>
        <Path fill="#000"  d="M208 416C93.31 416 0 322.69 0 208S93.31 0 208 0s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S305.05 32 208 32z"></Path>
        <Path fill="#000" d="M208 304a16 16 0 01-16-16v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32h-64v64a16 16 0 01-16 16z"></Path>
      </G>
    </Svg>
  )
}

export default Icon
