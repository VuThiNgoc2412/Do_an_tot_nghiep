import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "service": "Service",
            "news": "News",
            "discount": "Discount",
            "shopdunkCare": "Shopdunk Care",
            "installmentPay": "Installment Pay",
            "traceInSale": "Trace In Sale",
            "simCard": "Sim Card",
            "register": "Register",
            "login": "Login",
        }
    },
    vi: {
        translation: {
            "service": "Dịch Vụ",
            "news": "Tin Tức",
            "discount": "Khuyến Mại",
            "shopdunkCare": "Bảo Hành Ủy Quyền Apple",
            "installmentPay": "Trả Góp",
            "traceInSale": "Thu cũ đổi mới",
            "simCard": "Sim Thẻ",
            "register": "Tạo Tài Khoản Ngay",
            "login": "Đăng Nhập",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "vi",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;