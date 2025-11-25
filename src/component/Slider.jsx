import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.png'
const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img className='w-full h-[450px]'  src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[450px]' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[450px]' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[450px]' src={img4} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;