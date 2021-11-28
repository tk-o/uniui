import * as React from "react";
import { HeadingLevel, HeadingProps } from "@uniui/heading-core";

export { HeadingLevel } from "@uniui/heading-core";

export function Heading({ children, level }: HeadingProps) {
  let className = `heading-${level}`;

  switch (level) {
    case HeadingLevel.H1:
      return <h1 className={className}>{children}</h1>;
    case HeadingLevel.H2:
      return <h2 className={className}>{children}</h2>;
    case HeadingLevel.H3:
      return <h3 className={className}>{children}</h3>;
    case HeadingLevel.H4:
    default:
      return <h4 className={className}>{children}</h4>;
  }
}
