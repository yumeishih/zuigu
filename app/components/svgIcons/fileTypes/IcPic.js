import React from "react";
import Svg, { Defs, G, Path, Circle } from "react-native-svg";

const IcPic = props => (
  <Svg width={60} height={60} viewBox="0 0 60 60" {...props}>
    <Defs />
    <G id="ic_pic" transform="translate(-32 -113)">
      <Path
        id="block"
        d="M0 0h60v60H0z"
        transform="translate(32 113)"
        fill="#fff"
      />
      <G
        id="Group_301"
        data-name="Group 301"
        transform="translate(-66.984 24.677)"
      >
        <G
          id="Rectangle_186"
          data-name="Rectangle 186"
          stroke="#3f5b98"
          strokeMiterlimit={10}
          strokeWidth={2}
          fill="#fff"
        >
          <Path
            d="M2 0h22a20 20 0 0 1 20 20v38a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
            transform="translate(106.984 88.323)"
            stroke="none"
          />
          <Path
            d="M108.984 89.323h22a19 19 0 0 1 19 19v38a1 1 0 0 1-1 1h-40a1 1 0 0 1-1-1v-56a1 1 0 0 1 1-1z"
            fill="none"
          />
        </G>
        <Path
          id="Path_98"
          d="M134.641 89.633v15.78h15"
          data-name="Path 98"
          fill="none"
          stroke="#3f5b98"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <Path
          id="Path_99"
          d="M113.91 137.291l13.374-22.214 11.246 19.9-4.924-11.654 3.283-4.79 9.118 18.76z"
          className="cls-4"
          data-name="Path 99"
        />
        <Circle
          id="Ellipse_12"
          cx={4}
          cy={4}
          r={4}
          className="cls-4"
          data-name="Ellipse 12"
          transform="translate(115.505 107.323)"
        />
      </G>
    </G>
  </Svg>
);

export default IcPic;

