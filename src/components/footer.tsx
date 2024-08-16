import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import '../styles/footer.css'

const Footer = () => {
    const { t } = useTranslation(['footer'])
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-upper">
                    <div className="footer-block follow-us">
                        <div className="header-logo">
                            <Link to={"/"}>
                                <img src="https://shopdunk.com/images/thumbs/0027333_logo-shopdunk.png" alt="" />
                            </Link>
                        </div>

                        <div className="topic-block">
                            <div className="topic-block-body">
                                <p className="ft_gioithieu">{t("footer:footer.ft")}</p>
                            </div>
                        </div>

                        <div className="social">
                            <ul className="networks">
                                <li className="facebook">
                                    <Link to={"/"}>
                                        <img src="https://shopdunk.com/Themes/SD/Content/images/Face.png" alt="" />
                                    </Link>
                                </li>
                                <li className="twitter">
                                    <Link to={"/"}>
                                        <img src="https://shopdunk.com/Themes/SD/Content/images/Youtube.png" alt="" />
                                    </Link>
                                </li>
                                <li className="rss">
                                    <Link to={"/"}>
                                        <img src="https://shopdunk.com/Themes/SD/Content/images/Zalo.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-block information">
                        <div className="footer-title">
                            <strong>{t("footer.information")}</strong>
                        </div>
                        <ul className="footer-list">
                            <li><Link to={"/"}>{t("footer.news")}</Link></li>
                            <li><Link to={"/"}>{t("footer.about")}</Link></li>
                            <li><Link to={"/"}>{t("footer.checkIMEI")}</Link></li>
                            <li><Link to={"/"}>{t("footer.paymentMethod")}</Link></li>
                            <li><Link to={"/"}>{t("footer.rentRetailLocation")}</Link></li>
                            <li><Link to={"/"}>{t("footer.warrantyAndRepair")}</Link></li>
                            <li><Link to={"/"}>{t("footer.careers")}</Link></li>
                            <li><Link to={"/"}>{t("footer.qualityAssessmentComplaints")}</Link></li>
                            <li><Link to={"/"}>{t("footer.Tra cứu hoá đơn điện tử")}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-block customer-service">
                        <div className="footer-title">
                            <strong>{t("footer.customerService")}</strong>
                        </div>
                        <ul className="footer-list">
                            <li><Link to={"/"}>{t("footer.tradeInSale")}</Link></li>
                            <li><Link to={"/"}>{t("footer.delivery")}</Link></li>
                            <li><Link to={"/"}>{t("footer.deliveryZaloPay")}</Link></li>
                            <li><Link to={"/"}>{t("footer.cancelTheTransaction")}</Link></li>
                            <li><Link to={"/"}>{t("footer.productReturn")}</Link></li>
                            <li><Link to={"/"}>{t("footer.appleWarranty")}</Link></li>
                            <li><Link to={"/"}>{t("footer.service")}</Link></li>
                            <li><Link to={"/"}>{t("footer.resolveComplaints")}</Link></li>
                            <li><Link to={"/"}>{t("footer.securityPolicy")}</Link></li>
                            <li><Link to={"/"}>{t("footer.Hướng dẫn thanh toán qua VNPAY")}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-block my-account">
                        <div className="footer-title">
                            <strong>{t("footer.address&Contact")}</strong>
                        </div>
                        <ul className="footer-list">
                            <li><Link to={"/"}>{t("footer.myAccount")}</Link></li>
                            <li><Link to={"/"}>{t("footer.orders")}</Link></li>
                            <li><Link to={"/"}>{t("footer.branches")}</Link></li>
                            <li><Link to={"/"}>{t("footer.findStoreOnGoogleMap")}</Link></li>
                            <li><Link to={"/"}>{t("footer.purchase")}</Link></li>
                            <li><Link to={"/"}>{t("footer.complaint")}</Link></li>
                            <li><Link to={"/"}>{t("footer.enterprise")}</Link></li>
                            <li><Link to={"/"}>{t("footer.Bán hàng doanh nghiệp")}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-lower">
                <div className="footer-lower-container">
                    <div className="footer-lower-content">
                        <ul>
                            <li>© 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/2016.</li>
                            <li>Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt Nam</li>
                            <li>Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email: lienhe@shopdunk.com</li>
                        </ul>
                    </div>
                    <div className="footer-lower-img">
                        <img src="https://shopdunk.com/images/uploaded-source/Trang%20ch%E1%BB%A7/Bocongthuong.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer