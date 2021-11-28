import type { UseTheme, UseThemeProps, UseThemeResult as GenericUseThemeResult } from "@uniui/theme-core";
import tw from "twrnc";

type ClassNamesArgs = Parameters<GenericUseThemeResult['classNames']>

interface UseThemeResult {
  classNames(...args: ClassNamesArgs): ReturnType<typeof tw.style>
}

export let useThemeHook: UseTheme<UseThemeProps, UseThemeResult> = function useThemeHook() {
  return {
    classNames(...classNamesList) {
      const adoptedClassNamesList = classNamesList.map((className) => {
        if (typeof className === "number") {
          return className.toLocaleString();
        }

        return className;
      });

      return tw.style(...adoptedClassNamesList);
    },
  };
};
