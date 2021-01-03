import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

const RightArrowSVG = ({color}) => {
  return (
    <Svg width="8.36" height="14.73" viewBox="0 0 8.36 14.73">
      <Path fill={color} d="M1.7.29A1,1,0,0,0,.29.29h0a1,1,0,0,0,0,1.42l5,5a1,1,0,0,1,0,1.41L.29,13a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0L8.07,8.07a1,1,0,0,0,0-1.41Z"/>
    </Svg>
  )
}

export default RightArrowSVG