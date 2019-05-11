import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const IcPic = props => (
  <Svg width={60} height={60} viewBox="0 0 60 60" {...props}>
    <Path d="M0 0h60v60H0z" />
    <G data-name="Group 301" transform="translate(-98.984 -88.323)">
      <G data-name="Rectangle 186">
        <Path d="M108.984 88.323h22a20 20 0 0 1 20 20v38a2 2 0 0 1-2 2h-40a2 2 0 0 1-2-2v-56a2 2 0 0 1 2-2z" />
        <Path d="M108.984 89.323h22a19 19 0 0 1 19 19v38a1 1 0 0 1-1 1h-40a1 1 0 0 1-1-1v-56a1 1 0 0 1 1-1z" />
      </G>
      <Path d="M134.641 89.633v15.78h15" data-name="Path 98" />
      <Path
        d="M113.91 137.291l13.374-22.214 11.246 19.9-4.924-11.654 3.283-4.79 9.118 18.76z"
        data-name="Path 99"
      />
      <Circle
        cx={4}
        cy={4}
        r={4}
        data-name="Ellipse 12"
        transform="translate(115.505 107.323)"
      />
    </G>
  </Svg>
);

export default IcPic;

