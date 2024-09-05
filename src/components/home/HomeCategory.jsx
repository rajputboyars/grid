// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Category = () => {
//     const categoryRef = useRef([]);
    
//     const categories = [
//         { id: 1, name: 'Electronics', imgSrc: '/images/electronics.jpg' },
//         { id: 2, name: 'Fashion', imgSrc: '/images/fashion.jpg' },
//         { id: 3, name: 'Home & Living', imgSrc: '/images/home-living.jpg' },
//         { id: 4, name: 'Books', imgSrc: '/images/books.jpg' },
//         { id: 5, name: 'Sports', imgSrc: '/images/sports.jpg' },
//         { id: 6, name: 'Beauty', imgSrc: '/images/beauty.jpg' },
//         { id: 7, name: 'Toys', imgSrc: '/images/toys.jpg' },
//         { id: 8, name: 'Gadgets', imgSrc: '/images/gadgets.jpg' },
//         // Add more categories as needed
//     ];

//     useEffect(() => {
//         categoryRef.current.forEach((el, index) => {
//             gsap.fromTo(
//                 el,
//                 {
//                     opacity: 0,
//                     y: 50,
//                 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 0.5,
//                     ease: 'power3.out',
//                     scrollTrigger: {
//                         trigger: el,
//                         start: 'top 90%',
//                     },
//                     delay: index * 0.2, // Stagger animation
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="container mx-auto py-8 px-4">
//             <h2 className="text-2xl font-bold mb-4">Categories</h2>
//             <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300">
//                 <div className="flex space-x-6">
//                     {categories.map((category, index) => (
//                         <div
//                             key={category.id}
//                             className="flex flex-col items-center"
//                             ref={el => (categoryRef.current[index] = el)}
//                         >
//                             <div className="w-28 h-28 bg-gray-200 rounded-full overflow-hidden shadow-md">
//                                 <img
//                                     src={category.imgSrc}
//                                     alt={category.name}
//                                     className="object-cover w-full h-full"
//                                 />
//                             </div>
//                             <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Category;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeCategory = () => {
    const categoryRef = useRef([]);
    
    const categories = [
        { id: 1, name: 'Electronics', imgSrc: '/images/electronics.jpg' },
        { id: 2, name: 'Fashion', imgSrc: '/images/fashion.jpg' },
        { id: 3, name: 'Home & Living', imgSrc: '/images/home-living.jpg' },
        { id: 4, name: 'Books', imgSrc: '/images/books.jpg' },
        { id: 5, name: 'Sports', imgSrc: '/images/sports.jpg' },
        { id: 6, name: 'Beauty', imgSrc: '/images/beauty.jpg' },
        { id: 7, name: 'Toys', imgSrc: '/images/toys.jpg' },
        { id: 8, name: 'Gadgets', imgSrc: '/images/gadgets.jpg' },
        // Add more categories as needed
    ];

    useEffect(() => {
        categoryRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play reverse play reverse',
                        // OnEnter: animate, OnLeave: reverse, OnEnterBack: animate again, OnLeaveBack: reverse again
                    },
                    delay: index * 0.2, // Stagger animation
                }
            );
        });
    }, []);

    return (
        <section className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300">
                <div className="flex space-x-6">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center"
                            ref={el => (categoryRef.current[index] = el)}
                        >
                            <div className="w-28 h-28 bg-gray-200 rounded-full overflow-hidden shadow-md">
                                <img
                                    src={category.imgSrc}
                                    alt={category.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCategory;
