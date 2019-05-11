import React from "react";
import Svg, { Path } from "react-native-svg";

const BtnSearchWhite = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M15.5 14h-.79l-.28-.27a6.51 6.51 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1 1 14 9.5 4.494 4.494 0 0 1 9.5 14z"
      data-name="Path 100"
      fill="#fff"
    />
    <Path d="M0 0h24v24H0z" data-name="Path 101" fill="none" />
  </Svg>
);

export default BtnSearchWhite;

