import type * as React from "react";

export enum HeadingLevel {
  H1 = 1,
  H2,
  H3,
  H4
}
export interface HeadingProps
  extends React.PropsWithChildren<{
    level?: HeadingLevel;
  }> {}
