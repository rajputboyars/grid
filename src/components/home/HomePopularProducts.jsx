// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const HomePopularProducts = () => {
//     const productRefs = useRef([]);

//     const products = [
//         {
//             id: 1,
//             title: 'Wireless Headphones',
//             description: 'Experience high-quality sound without the wires. Perfect for music lovers.',
//             price: '$120',
//             imgSrc: '/images/headphones.jpg',
//         },
//         {
//             id: 2,
//             title: 'Smart Watch',
//             description: 'Stay connected on the go with this sleek and modern smartwatch.',
//             price: '$250',
//             imgSrc: '/images/smartwatch.jpg',
//         },
//         {
//             id: 3,
//             title: 'Gaming Laptop',
//             description: 'Powerful performance for gamers and professionals alike.',
//             price: '$1500',
//             imgSrc: '/images/gaming-laptop.jpg',
//         },
//         // Add more products as needed
//     ];

//     useEffect(() => {
//         productRefs.current.forEach((el, index) => {
//             gsap.fromTo(
//                 el,
//                 { opacity: 0, y: 50 }, // Initial state: invisible and slightly down
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 0.8,
//                     ease: 'power3.out',
//                     scrollTrigger: {
//                         trigger: el,
//                         start: 'top 50%', // Start the animation when the top of the element is 80% down the viewport
//                         end: 'top 10%',   // End when the top of the element reaches 30% down the viewport
//                         scrub: true,      // Smoothly animate in sync with the scroll position
//                         toggleActions: 'play reverse play reverse', // Play forward and reverse on scroll
//                     },
//                     delay: index * 0.2,
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="container mx-auto py-12 px-4">
//             <h2 className="text-3xl font-bold mb-8 text-center">Popular Products</h2>
//             <div className="space-y-16">
//                 {products.map((product, index) => (
//                     <div
//                         key={product.id}
//                         ref={el => (productRefs.current[index] = el)}
//                         className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 h-[60vh]"
//                     >
//                         {/* Image Side */}
//                         <div className="relative lg:w-1/2 w-full h-full">
//                             <img
//                                 src={product.imgSrc}
//                                 alt={product.title}
//                                 className="object-cover w-full h-full rounded-lg shadow-lg"
//                             />
//                             <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
//                                 Popular
//                             </span>
//                         </div>

//                         {/* Details Side */}
//                         <div className="lg:w-1/2 w-full flex flex-col justify-center">
//                             <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
//                             <p className="text-gray-700 mb-4">{product.description}</p>
//                             <span className="text-xl font-bold text-green-600">{product.price}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default HomePopularProducts;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PopularProducts = () => {
    const productRefs = useRef([]);

    const products = [
        {
            id: 1,
            title: 'Wireless Headphones',
            description: 'Experience high-quality sound without the wires. Perfect for music lovers.',
            price: '$120',
            imgSrc: '/images/headphones.jpg',
        },
        {
            id: 2,
            title: 'Smart Watch',
            description: 'Stay connected on the go with this sleek and modern smartwatch.',
            price: '$250',
            imgSrc: '/images/smartwatch.jpg',
        },
        {
            id: 3,
            title: 'Gaming Laptop',
            description: 'Powerful performance for gamers and professionals alike.',
            price: '$1500',
            imgSrc: '/images/gaming-laptop.jpg',
        },
        // Add more products as needed
    ];

    useEffect(() => {
        productRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 30%',
                        end: 'top 0%',
                        scrub: true,
                        toggleActions: 'play reverse play reverse',
                    },
                    delay: index * 0.2,
                }
            );
        });
    }, []);

    return (
        <section className="container mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Products</h2>
            <div className="space-y-28">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={el => (productRefs.current[index] = el)}
                        className={`flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 h-[60vh] ${
                            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                        }`}
                    >
                        {/* Image Side */}
                        <div className="relative lg:w-1/2 w-full h-full">
                            <img
                                src={product.imgSrc}
                                alt={product.title}
                                className="object-cover w-full h-full rounded-lg shadow-lg"
                            />
                            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                                Popular
                            </span>
                        </div>

                        {/* Details Side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
                            <p className="text-gray-700 mb-4">{product.description}</p>
                            <span className="text-xl font-bold text-green-600">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;
