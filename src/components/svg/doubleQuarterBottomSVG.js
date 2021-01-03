import React from 'react'
import Svg, {G, Polygon} from 'react-native-svg'

const DoubleQuarterBottomSVG = () => {
  return (
    <Svg width="12" height="9">
      <G>
        <Polygon
          fill="#cecece"
          points="9 8.47 11.84 3.71 11.84 0 6.87 0 6.87 3.71 9.62 3.71 6.78 8.47 9 8.47"
        />
        <Polygon
          fill="#cecece"
          points="0 8.47 2.22 8.47 5.06 3.71 5.06 0 0.08 0 0.08 3.71 2.84 3.71 0 8.47"
        />
      </G>
    </Svg>
  )
}

export default DoubleQuarterBottomSVG
