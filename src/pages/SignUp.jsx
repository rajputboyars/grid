import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGoogle, FaFacebookF, FaInstagram } from 'react-icons/fa';
import image from "../assets/images/signupbg.jpg"
const SignUp = () => {
    const formRef = useRef(null);
    const inputRefs = useRef([]);
    const socialRefs = useRef([]);

    useEffect(() => {
        // GSAP Animation on mount
        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo(
            inputRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
        );
        gsap.fromTo(
            socialRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
        );
    }, []);

    return (
        <div style={{'--image-URL':`url(${image})`}} className="bg-[image:var(--image-URL)] bg-cover bg-center bg-fixed flex justify-center items-center min-h-screen bg-gray-100" >
            <div ref={formRef} className="bg-white bg-opacity-35 p-8 rounded-lg shadow-lg w-full max-w-2xl border">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-black">Username</label>
                            <input
                                type="text"
                                id="username"
                                ref={(el) => (inputRefs.current[0] = el)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-black">Email</label>
                            <input
                                type="email"
                                id="email"
                                ref={(el) => (inputRefs.current[1] = el)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fullname" className="block text-black">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                ref={(el) => (inputRefs.current[2] = el)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-black">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                ref={(el) => (inputRefs.current[3] = el)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your mobile number"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-black">Password</label>
                            <input
                                type="password"
                                id="password"
                                ref={(el) => (inputRefs.current[4] = el)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-black">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                ref={(el) => (inputRefs.current[5] = el)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm your password"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        ref={(el) => (inputRefs.current[6] = el)}
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center my-6 border rounded-md py-2">Or sign up with</div>

                <div className="flex justify-around">
                    <button
                        ref={(el) => (socialRefs.current[0] = el)}
                        className="flex items-center justify-center w-10 h-10 rounded-full border text-white hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <FaGoogle />
                    </button>
                    <button
                        ref={(el) => (socialRefs.current[1] = el)}
                        className="flex items-center justify-center w-10 h-10 rounded-full border text-white hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <FaFacebookF />
                    </button>
                    <button
                        ref={(el) => (socialRefs.current[2] = el)}
                        className="flex items-center justify-center w-10 h-10 rounded-full border text-white hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        <FaInstagram />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
