import * as React from 'react'
import Svg, { type SvgProps, Path } from 'react-native-svg'
const PtFlag = (props: SvgProps) => (
  <Svg width={21} height={15} fill="none" {...props}>
    <Path fill="#249F58" d="M0 0h21v15H0z" />
    <Path
      fill="#FFDA2C"
      fillRule="evenodd"
      d="M10.5 2 18 7.5 10.5 13 3 7.5"
      clipRule="evenodd"
    />
    <Path fill="#1A47B8" d="M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9 9v1h1V9H9Zm2 0v1h1V9h-1ZM8 6s2.264.4 3.896 1.098L14 8"
      clipRule="evenodd"
    />
    <Path stroke="#fff" d="M8 6s2.264.4 3.896 1.098L14 8" />
  </Svg>
)
export default PtFlag
