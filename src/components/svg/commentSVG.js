import * as React from 'react'
import Svg, {G, Path, Text} from 'react-native-svg'

const CommentSVG = (props) => {
  return (
    <Svg width="40" height="33">
      {/* <Path
        fill="#fff"
        stroke="#efefef"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M18.3,5.12H5.78l6.07,6.46a20,20,0,0,0-2.49,9.65c.43,25,37.58,25,38,0C47.07,4.07,29.45-1.3,18.3,5.12Z"
      /> */}
      <G>
        <Path
          fill="#fff"
          d="M14.68,4h-10L9.51,9a15.09,15.09,0,0,0-2,7.5c.34,19.41,30.14,19.41,30.49,0C37.76,3.17,23.62-1,14.68,4Z"></Path>

        <Text fill="#000000" fontSize="13" x="22" y="22" textAnchor="middle">
          {props.comments}
        </Text>
        <Path
          fill="#efefef"
          d="M22.75,33h0c-8.42,0-17-5.66-17.24-16.46a17.51,17.51,0,0,1,1.57-7.2L0,2H14.17a19,19,0,0,1,17.56.21C37,5.12,39.89,10.17,40,16.47,39.81,27.35,31.18,33,22.75,33ZM9.28,5.93,12,8.72,11.25,10a13.16,13.16,0,0,0-1.73,6.57c.15,8.62,7,12.57,13.23,12.57S35.84,25.16,36,16.47A12.06,12.06,0,0,0,29.75,5.63a15,15,0,0,0-14.07,0l-.46.26Z"
        />
      </G>
    </Svg>
  )
}

export default CommentSVG
