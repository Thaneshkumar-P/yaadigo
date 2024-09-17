'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';
import '../slider.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider() {
  return (
    <div className="relative max-w-[1120px] mx-auto mt-5">
      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        width={1120}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="w-[340px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="w-[340px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="w-[340px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="w-[340px]">
          <Card />
        </SwiperSlide>
      </Swiper>

      <button className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <ChevronLeft color='black' />
      </button>
      <button className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <ChevronRight color='black' />
      </button>
    </div>
  );
}
