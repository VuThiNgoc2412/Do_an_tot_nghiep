import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HEADER_EN from '../locales/en/header.json'
import HOME_EN from '../locales/en/home.json'
import HEADER_VI from '../locales/vi/header.json'
import HOME_VI from '../locales/vi/home.json'

const resources = {
    en: {
        home: HOME_EN,
        header: HEADER_EN
    },
    vi: {
        home: HOME_VI,
        header: HEADER_VI
    }
};

const defaultNS = 'home'

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "vi",
        ns: ['home', 'header'],
        defaultNS,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;