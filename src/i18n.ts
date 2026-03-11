import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import itCommon from "./locales/it/common.json";
import enCommon from "./locales/en/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: { common: itCommon },
      en: { common: enCommon },
    },
    fallbackLng: "it",
    supportedLngs: ["it", "en"],
    defaultNS: "common",
    ns: ["common"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;