import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "id", "jp"],
    fallbackLng: "en",
    debug: true,
    detection: {
      order: [
        "queryString",
        "cookie",
        "htmlTag",
        "localStorage",
        "path",
        "subdomain",
      ],
      chace: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    // backend: {
    //   loadPath: "/public/locales/{{lng}}/translation.json",
    // },
    // lng: "jp",
  });

export default i18next;
