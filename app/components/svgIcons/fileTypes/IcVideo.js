import React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

const IcVideo = props => (
  <Svg width={60} height={60} viewBox="0 0 60 60" {...props}>
    <Defs />
    <G id="ic_video" transform="translate(-32 -467)">
      <Path
        id="Rectangle_223"
        d="M0 0h60v60H0z"
        className="cls-1"
        data-name="Rectangle 223"
        transform="translate(32 467)"
      />
      <G id="path" transform="translate(34.279 456.387)">
        <G
          id="Rectangle_204"
          data-name="Rectangle 204"
          stroke="#3f5b98"
          strokeMiterlimit={10}
          strokeWidth={2}
          fill="#fff"
        >
          <Path
            d="M2 0h22a20 20 0 0 1 20 20v38a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
            transform="translate(5.721 10.613)"
            stroke="none"
          />
          <Path
            d="M7.721 11.613h22a19 19 0 0 1 19 19v38a1 1 0 0 1-1 1h-40a1 1 0 0 1-1-1v-56a1 1 0 0 1 1-1z"
            className="cls-1"
          />
        </G>
        <Path
          id="Path_105"
          d="M21.125 35.023V51.2l16.192-8.366z"
          data-name="Path 105"
          fill="#3f5b98"
        />
        <Path
          id="Path_106"
          d="M33.378 11.923V27.7h15"
          data-name="Path 106"
          stroke="#3f5b98"
          strokeMiterlimit={10}
          strokeWidth={2}
          fill="none"
        />
      </G>
    </G>
  </Svg>
);

export default IcVideo;

