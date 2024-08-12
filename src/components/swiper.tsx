import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import '../styles/swiper.css'

import image1 from '../assets/banner2/1.png'
import image2 from '../assets/banner2/2.png'
import image3 from '../assets/banner2/3.png'
import image4 from '../assets/banner2/4.png'
import image5 from '../assets/banner2/5.png'
import image6 from '../assets/banner2/6.png'
import image7 from '../assets/banner2/7.png'
import image8 from '../assets/banner2/8.png'
import image9 from '../assets/banner2/9.png'

const Swipers = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
    return (
        <Swiper
            ref={swiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2500, // Thời gian giữa các slide (2500ms = 2.5s)
                disableOnInteraction: false, // Không dừng autoplay khi người dùng tương tác
            }}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]} // Thêm Autoplay vào đây
            className="mySwiper"
        >
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ width: "386px", height: "auto" }} src={image9} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Swipers