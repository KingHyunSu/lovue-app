import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

const LineSVG = (props) => {
  return (
    <Svg>
      {/* M10,50H280s55.5,2,55.5,55.5V189
          M(x,y) -- 시작 좌표
          H(x) -- M 지점부터 수평 좌표
          V(y) -- 수직 좌표
        */}
      <Path
        fill="transparent"
        stroke="#efefef"
        strokeMiterlimit="10"
        strokeWidth="20"
        d={`m${props.m},75H${props.h}s${props.s},2,${props.s},55.5V230`}
      />
    </Svg>
  )
}

export default LineSVG
