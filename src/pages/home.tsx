import { IoIosArrowForward } from "react-icons/io"
import ProductCard from "../components/product-card"
import Slider from "../components/slider"
import Swipers from "../components/swiper"
import '../styles/home.css'
import { Link } from "react-router-dom"
import baner from '../assets/banner1/baner.jpeg'
import { useTranslation } from "react-i18next"
import NewCard from "../components/new-card"

type Product = {
    productId: string;
    photos: {
        url: string,
        public_id: string;
    }[];
    name: string;
    price: number;
    stock: number;
}

type AllProduct = {
    iphone: Product[]
    ipad: Product[]
}

const product: AllProduct = {
    iphone: [
        {
            productId: "1",
            photos: [
                {
                    url: "https://shopdunk.com/images/thumbs/0024430_iphone-13-128gb_240.png",
                    public_id: "1"
                },
                {
                    url: "https://shopdunk.com/images/thumbs/0024430_iphone-13-128gb_240.png",
                    public_id: "2"
                },
            ],
            name: "iPhone 13 128GB",
            price: 24990000,
            stock: 45 / 100,
        },
        {
            productId: "2",
            photos: [
                {
                    url: "https://shopdunk.com/images/thumbs/0024431_iphone-15-128gb_240.png",
                    public_id: "1"
                },
                {
                    url: "https://shopdunk.com/images/thumbs/0024431_iphone-15-128gb_240.png",
                    public_id: "2"
                },
            ],
            name: "iPhone 15 128GB",
            price: 24990000,
            stock: 20 / 100,
        },
        {
            productId: "3",
            photos: [
                {
                    url: "https://shopdunk.com/images/thumbs/0020317_iphone-15-plus-128gb_240.webp",
                    public_id: "1"
                },
                {
                    url: "https://shopdunk.com/images/thumbs/0020317_iphone-15-plus-128gb_240.webp",
                    public_id: "2"
                },
            ],
            name: "iPhone 15 Plus 128GB",
            price: 27990000,
            stock: 18 / 100,
        },
        {
            productId: "4",
            photos: [
                {
                    url: "https://shopdunk.com/images/thumbs/0028064_iphone-15-pro-max-256gb_240.png",
                    public_id: "1"
                },
                {
                    url: "https://shopdunk.com/images/thumbs/0028064_iphone-15-pro-max-256gb_240.png",
                    public_id: "2"
                },
            ],
            name: "iPhone 15 Pro Max 256GB",
            price: 37990000,
            stock: 22 / 100,
        },
    ],
    ipad: [
        {
            productId: "5",
            photos: [
                {
                    url: "https://shopdunk.com/images/thumbs/0006205_ipad-gen-9-102-inch-wifi-64gb_240.png",
                    public_id: "1"
                },
                {
                    url: "https://shopdunk.com/images/thumbs/0006205_ipad-gen-9-102-inch-wifi-64gb_240.png",
                    public_id: "2"
                },
            ],
            name: "iPad gen 9 10.2 inch WiFi 64GB",
            price: 9990000,
            stock: 29 / 100,
        },
        {
            productId: "6",
            photos: [
                {
                    url: "https://shopdunk.com/images/thumbs/0009725_ipad-gen-10-th-109-inch-wifi-64gb_240.png",
                    public_id: "1"
                },
                {
                    url: "https://shopdunk.com/images/thumbs/0009725_ipad-gen-10-th-109-inch-wifi-64gb_240.png",
                    public_id: "2"
                },
            ],
            name: "iPad Gen 10 th 10.9 inch WiFi 64GB",
            price: 12990000,
            stock: 25 / 100,
        },
        {
            productId: "7",
            photos: [
                {
                    url: "https://shopdunk.com/images/thumbs/0025624_ipad-pro-m4-11-inch-wi-fi_240.jpeg",
                    public_id: "1"
                },
                {
                    url: "https://shopdunk.com/images/thumbs/0025624_ipad-pro-m4-11-inch-wi-fi_240.jpeg",
                    public_id: "2"
                },
            ],
            name: "iPad Pro M4 11 inch Wi-Fi",
            price: 28990000,
            stock: 4 / 100,
        },
        {
            productId: "8",
            photos: [
                {
                    url: "https://shopdunk.com/images/thumbs/0025630_ipad-air-6-m2-13-inch-wi-fi_240.jpeg",
                    public_id: "1"
                },
                {
                    url: "https://shopdunk.com/images/thumbs/0025630_ipad-air-6-m2-13-inch-wi-fi_240.jpeg",
                    public_id: "2"
                },
            ],
            name: "iPad Air 6 M2 13 inch Wi-Fi",
            price: 21990000,
            stock: 1 / 100,
        },
    ]
}

const news = [
    {
        id: "1",
        image: "https://shopdunk.com/images/thumbs/0028342_dolby-vision-co-loi-ich-gi_1600.jpeg",
        title: "Dolby Vision là gì? Dolby hỗ trợ cho sản phẩm và ứng dụng nào?",
        date: "13/08/2024",
    },
    {
        id: "2",
        image: "https://shopdunk.com/images/thumbs/0018730_191508341_presentation-wide_1600.png",
        title: "True Tone là gì? Khác biệt gì so với Night Shift trên iPhone?",
        date: "12/08/2024",
    },
    {
        id: "3",
        image: "https://shopdunk.com/images/thumbs/0028213_so-sanh-hdr10-hdr10cong-va-dolby-vision_1600.jpeg",
        title: "So sánh HDR10, HDR10+ và Dolby Vision: khác biệt như thế nào?",
        date: "09/08/2024",
    },
]

const Home = () => {

    const { t } = useTranslation(['home'])

    const addToCart = () => {

    }

    return (
        <div className="home-container">
            <div>
                <Slider />
            </div>
            <div className="home-swiper">
                <div className="home-swiper-content">
                    <Swipers />
                </div>
            </div>
            <div className="home-content">
                <div className="home-content-product">
                    <h2 className="home-category">iPhone</h2>
                    <div className="home-product">
                        {
                            product.iphone.map((i) => (
                                <ProductCard
                                    key={i.productId}
                                    productId={i.productId}
                                    photos={i.photos}
                                    name={i.name}
                                    price={i.price}
                                    stock={i.stock}
                                    handler={addToCart}
                                />
                            ))
                        }
                    </div>
                    <button className="home-btn"><Link to={"/iphone"}>{t("home.showAllIphone")}<IoIosArrowForward className="arrow-icon" /></Link></button>
                </div>

                <div className="home-content-product">
                    <h2 className="home-category">iPad</h2>
                    <div className="home-product">
                        {
                            product.ipad.map((i) => (
                                <ProductCard
                                    key={i.productId}
                                    productId={i.productId}
                                    photos={i.photos}
                                    name={i.name}
                                    price={i.price}
                                    stock={i.stock}
                                    handler={addToCart}
                                />
                            ))
                        }
                    </div>
                    <button className="home-btn"><Link to={"/iphone"}>{t("home.showAllIpad")}<IoIosArrowForward className="arrow-icon" /></Link></button>
                </div>
            </div>

            <div className="baner">
                <img src={baner} alt="" />
            </div>

            <div className="home-news">
                <h2 className="home-news-title">{t("home:home.news")}</h2>
                <div className="home-news-content">
                    {
                        news.map((i) => (
                            <NewCard key={i.id} id={i.id} image={i.image} title={i.title} date={i.date} />
                        ))
                    }
                </div>
                <button className="home-btn"><Link to={"/iphone"}>{t("home.viewNewsArchive")}<IoIosArrowForward className="arrow-icon" /></Link></button>
            </div>

            <div className="home-footer-letter">
                <div className="heading_newletter">{t("home.signUpToReceiveNewsFromShopDunk")}</div>
                <p>{t("home.latestProductInformationAndPromotions")}</p>
                <div className="newsletter-email">
                    <input className="newsletter-subscribe-text" type="email" placeholder={t("home.yourEmail")} />
                    <button className="button-1 newsletter-subscribe-button">{t("home.signUp")}</button>
                </div>
            </div>
        </div>
    )
}

export default Home