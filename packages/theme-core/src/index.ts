import typographyPlugin from "@tailwindcss/typography";
import classNames from "classnames";

export const config = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [typographyPlugin],
};

export interface UseThemeProps {}

export interface UseThemeResult {
  classNames: typeof classNames;
}

export type UseTheme<
  Props = UseThemeProps,
  Result = UseThemeResult
> = (props?: Props) => Result;

