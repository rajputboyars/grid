// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <header className="bg-white shadow-md">
//             <div className="container mx-auto max-lg:px-4 px-20 py-5 flex items-center justify-between">
//                 {/* Left Side - Website Icon */}
//                 <div className="flex text-xl font-bold font-serif text-green-800 items-center">
//                     C-<span className='font-serif text-green-600'>GRID</span>
//                 </div>

//                 {/* Middle - Navigation Links (Desktop) */}
//                 <nav className="hidden md:flex flex-1 items-center justify-center text-lg lg:space-x-12 space-x-8  font-medium">
//                     <NavLink
//                         to="/"
//                         className={({ isActive }) => isActive ? " text-primary" : "text-gray-700 hover:text-gray-900 "}
//                     >
//                         Home
//                     </NavLink>
//                     <NavLink
//                         to="/category"
//                         className={({ isActive }) => isActive ? " text-primary" : "text-gray-700 hover:text-gray-900 "}
//                     >
//                         Category
//                     </NavLink>
//                     <NavLink
//                         to="/popular-products"
//                         className={({ isActive }) => isActive ? " text-primary" : "text-gray-700 hover:text-gray-900 "}
//                     >
//                         Popular Products
//                     </NavLink>
//                     <NavLink
//                         to="/our-app"
//                         className={({ isActive }) => isActive ? " text-primary" : "text-gray-700 hover:text-gray-900 "}
//                     >
//                         Our App
//                     </NavLink>
//                 </nav>

//                 {/* Right Side - Icons */}
//                 <div className="flex items-center space-x-6">
//                     <NavLink
//                         to="/cart"
//                         className={({ isActive }) => isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900 bg-green-100 rounded-full p-2"}
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6 text-primary">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//                         </svg>

//                     </NavLink>
//                     <NavLink
//                         to="/wishlist"
//                         className={({ isActive }) => isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900 bg-red-100 rounded-full p-2"}
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//                         </svg>

//                     </NavLink>
//                     <NavLink
//                         to="/profile"
//                         className={({ isActive }) => isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900 bg-purple-100 rounded-full p-2"}
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="purple" className="size-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//                         </svg>


//                     </NavLink>

//                     {/* Hamburger Menu Icon (Mobile) */}
//                     <button
//                         className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <nav className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out">
//                     <div className="px-4 py-3 space-y-1">
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) => isActive ? "block text-gray-900  py-2" : "block text-gray-700 hover:text-gray-900  py-2"}
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Home
//                         </NavLink>
//                         <NavLink
//                             to="/category"
//                             className={({ isActive }) => isActive ? "block text-gray-900  py-2" : "block text-gray-700 hover:text-gray-900  py-2"}
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Category
//                         </NavLink>
//                         <NavLink
//                             to="/popular-products"
//                             className={({ isActive }) => isActive ? "block text-gray-900  py-2" : "block text-gray-700 hover:text-gray-900  py-2"}
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Popular Products
//                         </NavLink>
//                         <NavLink
//                             to="/our-app"
//                             className={({ isActive }) => isActive ? "block text-gray-900  py-2" : "block text-gray-700 hover:text-gray-900  py-2"}
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Our App
//                         </NavLink>
//                     </div>
//                 </nav>
//             )}
//         </header>
//     );
// };

// export default Header;
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Refs for each element to animate
    const logoRef = useRef(null);
    const navLinksRef = useRef([]);
    const iconsRef = useRef([]);

    useEffect(() => {
        // GSAP animations on component mount
        gsap.from(logoRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.out"
        });

        gsap.from(navLinksRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            delay: 0.3,
        });

        gsap.from(iconsRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            delay: 0.6,
        });
        gsap.to(logoRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        });

        gsap.to(navLinksRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            delay: 0.3,
        });

        gsap.to(iconsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            delay: 0.6,
        });
    }, []);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto max-lg:px-4 px-20 py-5 flex items-center justify-between">
                {/* Left Side - Website Icon */}
                <div ref={logoRef} className="flex text-xl font-bold font-serif text-green-800 items-center">
                    C-<span className='font-serif text-green-600'>GRID</span>
                </div>

                {/* Middle - Navigation Links (Desktop) */}
                <nav className="hidden md:flex flex-1 items-center justify-center text-lg lg:space-x-12 space-x-8  font-medium">
                    <NavLink
                        to="/"
                        ref={(el) => (navLinksRef.current[0] = el)}
                        className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-gray-900 "}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/category"
                        ref={(el) => (navLinksRef.current[1] = el)}
                        className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-gray-900 "}
                    >
                        Category
                    </NavLink>
                    <NavLink
                        to="/popular-products"
                        ref={(el) => (navLinksRef.current[2] = el)}
                        className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-gray-900 "}
                    >
                        Popular Products
                    </NavLink>
                    <NavLink
                        to="/our-app"
                        ref={(el) => (navLinksRef.current[3] = el)}
                        className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-gray-900 "}
                    >
                        Our App
                    </NavLink>
                </nav>

                {/* Right Side - Icons */}
                <div className="flex items-center space-x-6">
                    <NavLink
                        to="/cart"
                        ref={(el) => (iconsRef.current[0] = el)}
                        className={({ isActive }) => isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900 bg-green-100 rounded-full p-2"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </NavLink>
                    <NavLink
                        to="/wishlist"
                        ref={(el) => (iconsRef.current[1] = el)}
                        className={({ isActive }) => isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900 bg-red-100 rounded-full p-2"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </NavLink>
                    <NavLink
                        to="signin"
                        ref={(el) => (iconsRef.current[2] = el)}
                        className={({ isActive }) => isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900 bg-purple-100 rounded-full p-2"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="purple" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </NavLink>

                    {/* Hamburger Menu Icon (Mobile) */}
                    <button
                        className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out">
                    <div className="px-4 py-3 space-y-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "block text-gray-900 py-2" : "block text-gray-700 hover:text-gray-900 py-2"}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/category"
                            className={({ isActive }) => isActive ? "block text-gray-900 py-2" : "block text-gray-700 hover:text-gray-900 py-2"}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Category
                        </NavLink>
                        <NavLink
                            to="/popular-products"
                            className={({ isActive }) => isActive ? "block text-gray-900 py-2" : "block text-gray-700 hover:text-gray-900 py-2"}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Popular Products
                        </NavLink>
                        <NavLink
                            to="/our-app"
                            className={({ isActive }) => isActive ? "block text-gray-900 py-2" : "block text-gray-700 hover:text-gray-900 py-2"}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our App
                        </NavLink>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
