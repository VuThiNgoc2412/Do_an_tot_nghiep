import { Carousel } from "react-bootstrap"
import "../styles/slider.css"
import image1 from '../assets/banner1/1.png'
import image2 from '../assets/banner1/2.jpg'
import image3 from '../assets/banner1/3.jpg'
import image4 from '../assets/banner1/4.png'
import image5 from '../assets/banner1/5.png'
import image6 from '../assets/banner1/6.png'
import image7 from '../assets/banner1/7.png'
import image8 from '../assets/banner1/8.png'
import image9 from '../assets/banner1/9.png'


const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image4} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image5} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image6} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image7} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image8} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "auto" }} src={image9} alt="" />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider