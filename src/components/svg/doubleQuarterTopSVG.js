import React from 'react'
import Svg, {G, Polygon} from 'react-native-svg'

const DoubleQuarterTopSVG = () => {
  return (
    <Svg width="12" height="9">
      <G>
        <Polygon
          fill="#cecece"
          points="2.84 0 0 4.76 0 8.47 4.97 8.47 4.97 4.76 2.22 4.76 5.06 0 2.84 0"
        />
        <Polygon
          fill="#cecece"
          points="11.84 0 9.62 0 6.78 4.76 6.78 8.47 11.76 8.47 11.76 4.76 9 4.76 11.84 0"
        />
      </G>
    </Svg>
  )
}

export default DoubleQuarterTopSVG
