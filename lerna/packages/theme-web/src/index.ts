import type { UseTheme } from "@uniui/theme-core";
import classNames from "classnames";

export let useThemeHook: UseTheme = function useThemeHook() {
  return {
    classNames
  };
};
