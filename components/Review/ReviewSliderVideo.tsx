'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import { dataReview } from '../data/Data';
import { Navigation } from 'swiper/modules';


const ReviewSliderVideo = () => {
     return (
          <>
          <Swiper 
          effect='cards' 
          grabCursor={true} 
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[EffectCards, Navigation, Pagination, Mousewheel, Keyboard]}
          className='py-20 md:w-[9000px] md:h-[700px] w-full max-w-[82%] h-700px]'>
               {dataReview.map((video) => (
                    <SwiperSlide key={video.id} 
                    className='bg-white rounded-3xl flex flex-col items-center justify-center px-6 py-6 shadow-lg' style={{ color: video.color }}>
                         <h3 className='text-center text-4xl font-semibold text-gray-700 mb-4' style={{ color: video.color }}>
                              {video.title}
                         </h3>
                         <div className='h-[2px] w-full max-w-[800px] mx-auto bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mt-10 mb-10'></div>
                         <div className=' aspect-video rounded-xl  shadow-md'>
                              <iframe width='100%' height='100%' src={video.url} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className='w-full h-full'></iframe>
                         </div>
                    </SwiperSlide>
               ))}
          </Swiper>
          </>
     );
};

export default ReviewSliderVideo;
