import { IoIosArrowForward } from "react-icons/io"
import ProductCard from "../components/product-card"
import Slider from "../components/slider"
import Swipers from "../components/swiper"
import '../styles/home.css'
import { Link } from "react-router-dom"

const Home = () => {

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
                <h2 className="home-category">iPhone</h2>
                <div className="home-product">
                    <ProductCard
                        key={1}
                        productId="1"
                        photos={[
                            {
                                url: "https://shopdunk.com/images/thumbs/0024430_iphone-13-128gb_240.png",
                                public_id: "1"
                            },
                        ]}
                        name="Iphone 13 128GB"
                        price={24990000}
                        stock={45 / 100}
                        handler={addToCart}
                    />

                    <ProductCard
                        key={2}
                        productId="2"
                        photos={[
                            {
                                url: "https://shopdunk.com/images/thumbs/0028064_iphone-15-pro-max-256gb_240.png",
                                public_id: "1"
                            },
                        ]}
                        name="Iphone 13 128GB"
                        price={24990000}
                        stock={45 / 100}
                        handler={addToCart}
                    />
                    <ProductCard
                        key={3}
                        productId="2"
                        photos={[
                            {
                                url: "https://shopdunk.com/images/thumbs/0028064_iphone-15-pro-max-256gb_240.png",
                                public_id: "1"
                            },
                        ]}
                        name="Iphone 13 128GB"
                        price={24990000}
                        stock={45 / 100}
                        handler={addToCart}
                    />
                    <ProductCard
                        key={4}
                        productId="2"
                        photos={[
                            {
                                url: "https://shopdunk.com/images/thumbs/0028064_iphone-15-pro-max-256gb_240.png",
                                public_id: "1"
                            },
                        ]}
                        name="Iphone 13 128GB"
                        price={24990000}
                        stock={45 / 100}
                        handler={addToCart}
                    />
                </div>
                <button className="home-btn"><Link to={"/iphone"}>Xem tất cả iPhone<IoIosArrowForward /></Link></button>
            </div>
        </div>
    )
}

export default Home