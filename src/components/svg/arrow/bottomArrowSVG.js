import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

const bottomArrowSVG = ({color}) => {
  return (
    <Svg width="15.56" height="9.19" viewBox="0 0 15.56 9.19">
      <Path fill={color} d="M.29,1.7A1,1,0,0,1,.29.29h0a1,1,0,0,1,1.42,0l5,5a1,1,0,0,0,1.41,0L13,.29a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L8.07,8.07a1,1,0,0,1-1.41,0Z"/>
    </Svg>
  )
}

export default bottomArrowSVG