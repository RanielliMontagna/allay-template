import * as React from 'react'
import Svg, { type SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'
const EnFlag = (props: SvgProps) => (
  <Svg width={21} height={15} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path fill="#1A47B8" d="M0 0h21v15H0z" />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M2.234 0H0v2.5L18.754 15H21v-2.5L2.234 0Z"
        clipRule="evenodd"
      />
      <Path fill="#F93939" d="M.745 0 21 13.535V15h-.728L0 1.45V0h.745Z" />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M19 0h2v2.5S8.01 10.828 2 15H0v-2.5L19 0Z"
        clipRule="evenodd"
      />
      <Path fill="#F93939" d="M21 0h-.678L0 13.547V15h.745L21 1.462V0Z" />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M7.637 0h5.743v4.627H21v5.743h-7.62V15H7.637v-4.63H0V4.627h7.637V0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#F93939"
        fillRule="evenodd"
        d="M8.842 0h3.316v5.77H21v3.46h-8.842V15H8.842V9.23H0V5.77h8.842V0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h21v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default EnFlag
