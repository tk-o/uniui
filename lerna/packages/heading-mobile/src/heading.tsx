import * as React from "react";
import { Text } from "react-native";
import {
  HeadingLevel,
  HeadingProps as HeadingPropsBase,
} from "@uniui/heading-core";
import { useThemeHook } from "@uniui/theme-mobile";

export { HeadingLevel } from "@uniui/heading-core";

export type HeadingProps = HeadingPropsBase & Text["props"];

export function Heading({ children, level, style, ...props }: HeadingProps) {
  const { classNames } = useThemeHook();

  console.log({ style });

  // let extendStyle = (styleExtension) => sx([
  //   [styleExtension],
  //   //@ts-ignore
  //   // ...style,
  // ]);

  let extendedStyle;
  switch (level) {
    case HeadingLevel.H1:
      extendedStyle = { "text-xl": true };
    case HeadingLevel.H2:
      extendedStyle = { "text-lg": true };
    case HeadingLevel.H3:
      extendedStyle = { "text-base": true };
    case HeadingLevel.H4:
    default:
      extendedStyle = { "text-sm": true };
  }

  console.log(extendedStyle)

  return (
    <Text
    //@ts-ignore
      style={[ ...style, [extendedStyle]]}
      {...props}
    >
      {children}
    </Text>
  );
}
