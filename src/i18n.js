import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEn from './localization/en.json';
import translationAr from './localization/ar.json';
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
    en: {
        translation: translationEn
    },
    ar: {
        translation: translationAr
    }
}


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        },
        react:{
            useSuspense:false
        }
    });

export default i18n