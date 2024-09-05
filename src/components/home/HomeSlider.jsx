// import React, { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { gsap } from 'gsap';

// const HomeSlider = () => {
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         // GSAP animation for the slider on load
//         gsap.from(sliderRef.current, {
//             scale: 0.9,
//             opacity: 0,
//             duration: 1,
//             ease: 'power2.out',
//         });
//     }, []);

//     const slides = [
//         { id: 1, src: '/images/slide1.jpg', alt: 'Slide 1 - Welcome to C-GRID' },
//         { id: 2, src: '/images/slide2.jpg', alt: 'Slide 2 - Explore Categories' },
//         { id: 3, src: '/images/slide3.jpg', alt: 'Slide 3 - Popular Projects' },
//         { id: 4, src: '/images/slide4.jpg', alt: 'Slide 4 - Our App Features' },
//         { id: 5, src: '/images/slide5.jpg', alt: 'Slide 5 - Join Us Today!' },
//     ];

//     return (
//         <div ref={sliderRef} className="container mx-auto py-8 px-4">
//             <Swiper
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 loop={true}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//             >
//                 {slides.map(slide => (
//                     <SwiperSlide key={slide.id}>
//                         <div className="flex justify-center items-center h-64 overflow-hidden">
//                             <img
//                                 src={slide.src}
//                                 alt={slide.alt}
//                                 className="object-cover w-full h-full"
//                             />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default HomeSlider;
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { gsap } from 'gsap';
import { Autoplay } from 'swiper/modules';

const HomeSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        // GSAP animation for the slider on load
        gsap.from(sliderRef.current, {
            scale: 0.1,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
        });
        gsap.to(sliderRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
        });
    }, []);

    return (
        <div ref={sliderRef} className="container mx-auto py-8 px-4">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className="flex justify-center items-center h-[70vh] bg-green-200 text-xl font-bold">
                        Slide 1 - Welcome to C-GRID
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center h-[70vh] bg-blue-200 text-xl font-bold">
                        Slide 2 - Explore Categories
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center h-[70vh] bg-yellow-200 text-xl font-bold">
                        Slide 3 - Popular Projects
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center h-[70vh] bg-red-200 text-xl font-bold">
                        Slide 4 - Our App Features
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center h-[70vh] bg-purple-200 text-xl font-bold">
                        Slide 5 - Join Us Today!
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeSlider;
