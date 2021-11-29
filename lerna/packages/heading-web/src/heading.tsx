import * as React from "react";
import {
  HeadingLevel,
  HeadingProps as HeadingPropsBase,
} from "@uniui/heading-core";
import { useThemeHook } from "@uniui/theme-web";

export { HeadingLevel } from "@uniui/heading-core";

export type HeadingProps = HeadingPropsBase &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;

export function Heading({ children, level, className , ...props }: HeadingProps) {
  let { classNames: cx } = useThemeHook()
  
  let extendClassName = (extendClassName: string) => cx([
    extendClassName,
    className,
  ]);

  switch (level) {
    case HeadingLevel.H1:
      return <h1 className={extendClassName('prose-xl')} {...props}>{children}</h1>;
    case HeadingLevel.H2:
      return <h2 className={extendClassName('prose-lg')} {...props}>{children}</h2>;
    case HeadingLevel.H3:
      return <h3 className={extendClassName('prose')} {...props}>{children}</h3>;
    case HeadingLevel.H4:
    default:
      return <h4 className={extendClassName('prose-sm')} {...props}>{children}</h4>;
  }
}
