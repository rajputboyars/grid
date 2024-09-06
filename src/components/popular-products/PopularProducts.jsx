import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a great product!',
    price: '$29.99',
    imageUrl: 'https://via.placeholder.com/300',
    tag: 'Popular',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is another awesome product!',
    price: '$39.99',
    imageUrl: 'https://via.placeholder.com/300',
    tag: 'Popular',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'You will love this product!',
    price: '$49.99',
    imageUrl: 'https://via.placeholder.com/300',
    tag: 'Popular',
  },
];

const PopularProducts = () => {
  const productRefs = useRef([]);

  useEffect(() => {
    productRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: index % 2 === 0 ? -200 : 200 }, // Determine direction based on index
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className='mx-40'>
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Popular Products</h2>
      <div className="space-y-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (productRefs.current[index] = el)}
            className={`flex items-center justify-between ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            } bg-gray-100 rounded-lg shadow-lg p-5`}
            style={{ height: '30vh' }} // Set height of each card to 20vh
          >
            {/* Product Image */}
            <div className="w-1/4 h-full overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="w-3/4 px-8">
              <div className="flex ">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <span className="ml-4 bg-green-500 text-white text-sm px-2 py-1 rounded">
                  {product.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-700">{product.description}</p>
              <div className="mt-4">
                <span className="text-lg font-bold">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PopularProducts;
