import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

const LeftArrowSVG = ({color}) => {
  return (
    <Svg width="8.36" height="14.73" viewBox="0 0 8.36 14.73">
      <Path fill={color} d="M6.66.29a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.42l-4.95,5a1,1,0,0,0,0,1.41l5,4.95a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L.29,8.07a1,1,0,0,1,0-1.41Z"/>
    </Svg>
  )
}

export default LeftArrowSVG