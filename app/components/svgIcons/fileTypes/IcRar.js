import React from "react";
import Svg, { Defs, G, Path, Text } from "react-native-svg";

// SVGR has dropped some elements not supported by react-native-svg: tspan

const IcRar = props => (
  <Svg width={60} height={60} viewBox="0 0 60 60" {...props}>
    <Defs />
    <G id="ic_rar" transform="translate(-32 -290)">
      <Path
        id="block"
        d="M0 0h60v60H0z"
        transform="translate(32 290)"
        fill="none"
      />
      <G id="path" transform="translate(-16.352 201.677)">
        <G id="Path_111" data-name="Path 111" fill="#fff">
          <Path
            d="M42 59H2c-.551 0-1-.449-1-1V2c0-.551.449-1 1-1h22a18.938 18.938 0 0 1 13.435 5.565A18.938 18.938 0 0 1 43 20v38c0 .551-.449 1-1 1z"
            transform="translate(56.352 88.323)"
          />
          <Path
            d="M2 2v56h40V20c0-4.808-1.872-9.328-5.272-12.728C33.328 3.872 28.808 2 24 2H2m0-2h22c11.046 0 20 8.954 20 20v38a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
            transform="translate(56.352 88.323)"
            fill="#3f5b98"
          />
        </G>
        <Text
          id="RAR"
          transform="translate(72.575 142.462)"
          fontSize={12}
          fontFamily="Futura-Medium,Futura"
          fontWeight={500}
          fill="#3f5b98"
        />
        <Path
          id="Path_104"
          d="M84.009 89.633v15.78h15"
          data-name="Path 104"
          stroke="#3f5b98"
          strokeMiterlimit={10}
          strokeWidth={2}
          fill="none"
        />
        <Path
          id="Rectangle_191"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 191"
          transform="translate(62.67 94.323)"
        />
        <Path
          id="Rectangle_192"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 192"
          transform="translate(66.67 96.323)"
        />
        <Path
          id="Rectangle_193"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 193"
          transform="translate(62.67 98.323)"
        />
        <Path
          id="Rectangle_194"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 194"
          transform="translate(66.67 100.323)"
        />
        <Path
          id="Rectangle_195"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 195"
          transform="translate(62.67 102.323)"
        />
        <Path
          id="Rectangle_196"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 196"
          transform="translate(66.67 104.323)"
        />
        <Path
          id="Rectangle_197"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 197"
          transform="translate(62.67 106.323)"
        />
        <Path
          id="Rectangle_198"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 198"
          transform="translate(66.67 108.323)"
        />
        <Path
          id="Rectangle_199"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 199"
          transform="translate(62.67 110.323)"
        />
        <Path
          id="Rectangle_200"
          d="M0 0h2v2H0z"
          className="cls-5"
          data-name="Rectangle 200"
          transform="translate(66.67 112.323)"
        />
        <Path
          id="Rectangle_201"
          d="M0 0h4v4H0z"
          className="cls-5"
          data-name="Rectangle 201"
          transform="rotate(90 -10.327 77.997)"
        />
        <Path
          id="Rectangle_202"
          d="M0 0h2v22H0z"
          className="cls-5"
          data-name="Rectangle 202"
          transform="translate(64.67 92.323)"
        />
      </G>
    </G>
  </Svg>
);

export default IcRar;

