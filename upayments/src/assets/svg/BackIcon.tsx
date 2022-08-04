import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const BackIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill={'#000'} {...props}>
    <Path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm6 11H7.38l2.376 2.375-1.414 1.414-4.735-4.734 4.735-4.733 1.414 1.414L7.49 9H16Z" />
  </Svg>
)
