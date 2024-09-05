import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGoogle, FaFacebookF, FaInstagram } from 'react-icons/fa';
import image from "../assets/images/signupbg.jpg"

const SignIn = () => {
    const formRef = useRef(null);
    const inputRefs = useRef([]);
    const socialRefs = useRef([]);
console.log(formRef.current,"formref");

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
        <div style={{'--image-url':`url(${image})`}} className="bg-[image:var(--image-url)] bg-center bg-cover flex justify-center items-center min-h-screen bg-gray-100">
            <div ref={formRef} className="bg-white bg-opacity-35 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                <form className='text-black'>
                    <div className="mb-4">
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            type="email"
                            id="email"
                            ref={(el) => (inputRefs.current[0] = el)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block">Password</label>
                        <input
                            type="password"
                            id="password"
                            ref={(el) => (inputRefs.current[1] = el)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        ref={(el) => (inputRefs.current[2] = el)}
                        className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center my-6 border rounded-md py-2">Or sign in with</div>

                <div className="flex justify-around">
                    <button
                        ref={(el) => (socialRefs.current[0] = el)}
                        className="flex items-center justify-center w-10 h-10 rounded-full border  text-white hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <FaGoogle />
                    </button>
                    <button
                        ref={(el) => (socialRefs.current[1] = el)}
                        className="flex items-center justify-center w-10 h-10 rounded-full border  text-white hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <FaFacebookF />
                    </button>
                    <button
                        ref={(el) => (socialRefs.current[2] = el)}
                        className="flex items-center justify-center w-10 h-10 rounded-full border  text-white hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        <FaInstagram />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
