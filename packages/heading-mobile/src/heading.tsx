import * as React from "react";
import { Text } from "react-native";
import { HeadingLevel, HeadingProps } from "@uniui/heading-core";

export { HeadingLevel } from "@uniui/heading-core";

export function Heading({ children, level }: HeadingProps) {
  let fontSize: number;

  switch (level) {
    case HeadingLevel.H1:
      fontSize = 48
    case HeadingLevel.H2:
      fontSize = 36
    case HeadingLevel.H3:
      fontSize = 24
    case HeadingLevel.H4:
    default:
      fontSize = 18
  }

  return <Text style={[{fontSize}]}>{children}</Text>;
}
