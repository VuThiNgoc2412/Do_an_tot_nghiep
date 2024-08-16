import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HEADER_EN from '../locales/en/header.json'
import HOME_EN from '../locales/en/home.json'
import HEADER_VI from '../locales/vi/header.json'
import HOME_VI from '../locales/vi/home.json'
import FOOTER_EN from '../locales/en/footer.json'
import FOOTER_VI from '../locales/vi/footer.json'

export const resources = {
    en: {
        home: HOME_EN,
        header: HEADER_EN,
        footer: FOOTER_EN
    },
    vi: {
        home: HOME_VI,
        header: HEADER_VI,
        footer: FOOTER_VI
    }
};

export const defaultNS = 'home'

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "vi",
        ns: ['home', 'header', 'footer'],
        defaultNS,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;