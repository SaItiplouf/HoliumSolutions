import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector, {
  DetectorOptions,
} from "i18next-browser-languagedetector";
import tradFr from "./tradFr.json";
import tradEn from "./tradEn.json";

const detectionOptions: DetectorOptions = {
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"],
  cookieMinutes: 10,
  cookieDomain: "myDomain",
  cookieOptions: { path: "/", sameSite: "strict" }, // Assurez-vous que sameSite est correctement défini
};

const i18nOptions: InitOptions = {
  debug: true,
  fallbackLng: "fr",
  detection: detectionOptions,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: {
      translation: tradFr,
    },
    en: {
      translation: tradEn,
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nOptions);

export default i18n;
