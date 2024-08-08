import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import '../styles/header.css';
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {

    const { t, i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const changeLanguage = (lng: 'en' | 'vi') => {
        i18n.changeLanguage(lng)
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to={"/"}><img src="https://shopdunk.com/images/thumbs/0027333_logo-shopdunk.png" alt="Shopdunk Logo" /></Link>
            </div>
            <nav className="nav-links">
                <Link to="/iphone">iPhone</Link>
                <Link to="/ipad">iPad</Link>
                <Link to="/mac">Mac</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/may-cu">Máy Cũ</Link>
                <Link to="/phu-kien">Phụ Kiện</Link>
                <div className="dropdown dich-vu-dropdown">
                    <Link to="/dich-vu">{t('service')}<IoIosArrowDown /></Link>
                    <div className="dropdown-arrow dich-vu-arrow"></div>
                    <div className="dropdown-content dich-vu-content">
                        <Link to="/dich-vu1">{t('shopdunkCare')}</Link>
                        <Link to="/dich-vu2">{t('installmentPay')}</Link>
                        <Link to="/dich-vu3">{t('traceInSale')}</Link>
                        <Link to="/dich-vu3">WorkShop</Link>
                        <Link to="/dich-vu3">MBTI</Link>
                        <Link to="/dich-vu3">{t('simCard')}</Link>
                        <Link to="/dich-vu3">Apple Care</Link>
                        <Link to="/dich-vu3">Bán Hàng Doanh Nghiệp</Link>
                        <Link to="/dich-vu3">Microsoft-ofice</Link>
                    </div>
                </div>
                <Link to="/tin-tuc">{t('news')}</Link>
                <Link to="/khuyen-mai">{t('discount')}</Link>
            </nav>
            <div className="actions">
                <Link to="/"><IoSearchOutline className="icon" /></Link>
                <div className="cart">
                    <Link to="/cart">
                        <IoBagOutline className="icon" />
                        <span className="cart_length">2</span>
                    </Link>
                </div>
                <div className={`user-menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen((prev) => !prev)}>
                    <Link to="/"><CiUser className="icon" /></Link>
                    <div className="user-menu-content">
                        <Link to="/profile">{t('register')}</Link>
                        <Link to="/settings">{t('login')}</Link>
                    </div>
                </div>
                <button onClick={() => changeLanguage("vi")} className="flag" title="Tiếng Việt">
                    <img src="https://shopdunk.com/images/flags/vn.png" alt="Vietnam Flag" />
                </button>
                <button onClick={() => changeLanguage("en")} className="flag" title="English">
                    <img src="https://shopdunk.com/images/flags/us.png" alt="US Flag" />
                </button>
            </div>
        </header>
    );
}

export default Header;