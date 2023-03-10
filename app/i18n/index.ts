import i18n, {StringMap, TOptionsBase} from "i18next";
import {initReactI18next} from "react-i18next";

import en from "./locales/en.json";
import vi from "./locales/vi.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3", // react native does not support Intl API
    resources: {
      en,
      vi,
    },
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export const isRTL = false;

export default i18n;

export type TXOptions = TOptionsBase & StringMap;
