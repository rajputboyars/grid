import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            footerRef.current,
            { opacity: 0, y: 50 }, // Start with the footer slightly below the viewport and transparent
            {
                opacity: 1,
                y: 0, // Move the footer to its final position
                duration: 1,
                ease: 'power3.out',
            }
        );
    }, []);

    return (
        <footer ref={footerRef} className="bg-gray-800 text-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                    {/* Left Side - Logo and Description */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex text-xl font-bold font-serif text-green-700 items-center">
                    C-<span className='font-serif text-green-600'>GRID</span>
                </div>
                        <p className="text-gray-400 mt-2">Your go-to platform for amazing products and projects.</p>
                    </div>

                    {/* Middle - Navigation Links */}
                    <nav className="flex space-x-4 text-gray-400">
                        <NavLink to="/" className="hover:text-white">Home</NavLink>
                        <NavLink to="/about" className="hover:text-white">About Us</NavLink>
                        <NavLink to="/services" className="hover:text-white">Services</NavLink>
                        <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
                    </nav>

                    {/* Right Side - Social Media Links */}
                    <div className="flex space-x-4">
                        <NavLink to="/facebook" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.353C0 23.407.593 24 1.324 24h11.49v-9.294H9.692V10.41h3.122V8.086c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.796.142v3.24l-1.917.001c-1.503 0-1.794.714-1.794 1.76v2.308h3.587l-.467 3.296h-3.12V24h6.113c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
                            </svg>
                        </NavLink>
                        <NavLink to="/twitter" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.937 4.937 0 002.165-2.724 9.873 9.873 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482A13.956 13.956 0 011.671 3.149 4.922 4.922 0 003.194 9.724a4.905 4.905 0 01-2.229-.616v.062a4.924 4.924 0 003.946 4.827 4.935 4.935 0 01-2.224.084 4.927 4.927 0 004.598 3.417A9.869 9.869 0 010 21.543a13.897 13.897 0 007.548 2.212c9.057 0 14.009-7.507 14.009-14.01 0-.214-.004-.426-.014-.637A10.005 10.005 0 0024 4.557z" />
                            </svg>
                        </NavLink>
                        <NavLink to="/instagram" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.058 2.093.287 2.581.482.542.208.932.458 1.34.865.408.408.657.798.865 1.34.195.488.424 1.322.482 2.581.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.259-.287 2.093-.482 2.581-.208.542-.458.932-.865 1.34-.408.408-.798.657-1.34.865-.488.195-1.322.424-2.581.482-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.093-.287-2.581-.482-.542-.208-.932-.458-1.34-.865-.408-.408-.798-.657-1.34-.865-.488-.195-1.322-.424-2.581-.482-1.265-.058-1.645-.07-4.849-.07s-3.584.012-4.849.07c-1.259.058-2.093.287-2.581.482-.542.208-.932.458-1.34.865-.408.408-.657.798-.865 1.34-.195.488-.424 1.322-.482 2.581-.058 1.265-.07 1.645-.07 4.849s.012 3.584.07 4.849c.058 1.259.287 2.093.482 2.581.208.542.458.932.865 1.34.408.408.798.657 1.34.865.488.195 1.322.424 2.581.482 1.265.058 1.645.07 4.849.07s3.584-.012 4.849-.07c1.259-.058 2.093-.287 2.581-.482.542-.208.932-.458 1.34-.865.408-.408.657-.798.865-1.34.195-.488.424-1.322.482-2.581.058-1.265.07-1.645.07-4.849s-.012-3.584-.07-4.849c-.058-1.259-.287-2.093-.482-2.581-.208-.542-.458-.932-.865-1.34-.408-.408-.798-.657-1.34-.865-.488-.195-1.322-.424-2.581-.482-1.265-.058-1.645-.07-4.849-.07s-3.584.012-4.849.07c-1.259.058-2.093.287-2.581.482-.542.208-.932.458-1.34.865-.408.408-.798.657-1.34.865-.488.195-1.322.424-2.581.482-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.093-.287-2.581-.482-.542-.208-.932-.458-1.34-.865-.408-.408-.798-.657-1.34-.865-.488-.195-1.322-.424-2.581-.482-1.265-.058-1.645-.07-4.849-.07s-3.584.012-4.849.07c-1.259.058-2.093.287-2.581.482-.542.208-.932.458-1.34.865-.408.408-.798.657-1.34.865-.488.195-1.322.424-2.581.482-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.093-.287-2.581-.482-.542-.208-.932-.458-1.34-.865-.408-.408-.798-.657-1.34-.865-.488-.195-1.322-.424-2.581-.482-1.265-.058-1.645-.07-4.849-.07s-3.584-.012-4.849-.07c-1.259-.058-2.093-.287-2.581-.482-.542-.208-.932-.458-1.34-.865-.408-.408-.798-.657-1.34-.865-.488-.195-1.322-.424-2.581-.482-1.265-.058-1.645-.07-4.849-.07s-3.584-.012-4.849-.07c-1.259-.058-2.093-.287-2.581-.482-.542-.208-.932-.458-1.34-.865-.408-.408-.798-.657-1.34-.865-.488-.195-1.322-.424-2.581-.482-1.265-.058-1.645-.07-4.849-.07z" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-500">
                    &copy; {new Date().getFullYear()} C-GRID. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
