import {themeNames} from "@/shared/constants/theme";

export const switchTheme = (className) => {
  const bodyClasses = document.body.classList;

  bodyClasses.forEach((element) => {
    if (Object.values(themeNames).includes(element)) {
      bodyClasses.remove(element);
    }
  })

  bodyClasses.add(className);
};
