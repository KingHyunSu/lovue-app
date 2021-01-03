import * as React from 'react'
import Svg, {G, Path, Ellipse, Circle} from 'react-native-svg'

const CameraSVG = () => {
  return (
    <Svg viewBox="0 0 53 53">
      <G>
        <Circle fill="#fafafa" cx="26.5" cy="26.5" r="25"/>
        <Path fill="#c1c1c1" d="M26.5,53A26.5,26.5,0,1,1,53,26.5,26.53,26.53,0,0,1,26.5,53Zm0-50A23.5,23.5,0,1,0,50,26.5,23.52,23.52,0,0,0,26.5,3Z"/>
        <Path fill="#c1c1c1" d="M39.26,14.68H34.89a2.54,2.54,0,0,0-2.5-2.52H20.61a2.54,2.54,0,0,0-2.5,2.52H13.74a2.72,2.72,0,0,0-2.67,2.76V38.08a2.72,2.72,0,0,0,2.67,2.76H39.26a2.72,2.72,0,0,0,2.67-2.76V17.44A2.72,2.72,0,0,0,39.26,14.68Z"/>
        <Ellipse fill="#c1c1c1" stroke="#fafafa" strokeWidth="3" cx="26.5" cy="27.63" rx="7.5" ry="7.5"/>
      </G>
    </Svg>
  )
}

export default CameraSVG
