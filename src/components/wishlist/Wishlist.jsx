import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initialWishlist = [
  {
    id: 1,
    title: 'Product 1',
    price: 29.99,
    description: 'A short description of Product 1.',
    imageUrl: 'https://via.placeholder.com/150',
    isWishlisted: true, // Initially wishlisted
  },
  {
    id: 2,
    title: 'Product 2',
    price: 39.99,
    description: 'A short description of Product 2.',
    imageUrl: 'https://via.placeholder.com/150',
    isWishlisted: true,
  },
  {
    id: 3,
    title: 'Product 3',
    price: 49.99,
    description: 'A short description of Product 3.',
    imageUrl: 'https://via.placeholder.com/150',
    isWishlisted: true,
  },
  {
    id: 4,
    title: 'Product 4',
    price: 59.99,
    description: 'A short description of Product 4.',
    imageUrl: 'https://via.placeholder.com/150',
    isWishlisted: true,
  },
  {
    id: 5,
    title: 'Product 5',
    price: 69.99,
    description: 'A short description of Product 5.',
    imageUrl: 'https://via.placeholder.com/150',
    isWishlisted: true,
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const handleToggleWishlist = (id) => {
    setWishlist(wishlist.map((item) =>
      item.id === id ? { ...item, isWishlisted: !item.isWishlisted } : item
    ));
  };

  const handleAddToCart = (product) => {
    console.log(`Product ${product.title} added to cart`);
  };

  const totalWishlistItems = wishlist.filter((item) => item.isWishlisted).length;
  const totalWishlistPrice = wishlist
    .filter((item) => item.isWishlisted)
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Your Wishlist</h2>

      {/* Total Wishlist Info */}
      <div className="mb-6 flex justify-between items-center px-4">
        <div className="text-lg font-semibold">
          Total Wishlist Items: <span>{totalWishlistItems}</span>
        </div>
        <div className="text-lg font-semibold">
          Total Price: <span>${totalWishlistPrice}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {wishlist.map((product, index) => (
          product.isWishlisted && (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white shadow-lg rounded-lg p-4 relative"
            >
              {/* Product Image */}
              <div className="relative w-full h-40">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover rounded"
                />

                {/* Wishlist Toggle Icon */}
                <button
                  onClick={() => handleToggleWishlist(product.id)}
                  className={`absolute top-2 right-2 ${product.isWishlisted ? 'text-red-600' : 'text-red-600'}`}
                >
                  {product.isWishlisted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="none"
                      className="w-6 h-6"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{product.description}</p>
                <p className="text-green-600 font-bold mt-2">${product.price}</p>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
