import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: 'Product 1',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
  {
    id: 2,
    title: 'Product 2',
    price: 39.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
  {
    id: 3,
    title: 'Product 3',
    price: 49.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
  {
    id: 4,
    title: 'Product 4',
    price: 59.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(products);
  const productRefs = useRef([]);
  const [shippingPrice, setShippingPrice] = useState(5);
  const [deliveryCharge, setDeliveryCharge] = useState(10);

  useEffect(() => {
    productRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
      <div className="space-y-4 mx-40">
        {cartItems.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (productRefs.current[index] = el)}
            className="bg-white h-[150px] rounded-lg shadow-lg p-4 flex justify-between items-center relative"
          >
            {/* Remove Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              onClick={() => handleRemoveItem(product.id)}
            >
              &#10005;
            </button>

            {/* Product Image */}
            <div className=" h-full">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Product Info */}
            <div className="w-2/5 pl-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <span className="block text-lg font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Quantity Controls */}
            <div className="w-[100px] flex items-center justify-between">
              <button
                className="text-gray-700 bg-gray-200 px-2 rounded-full"
                onClick={() => handleQuantityChange(product.id, -1)}
              >
                -
              </button>
              <span className="text-lg">{product.quantity}</span>
              <button
                className="text-gray-700 bg-gray-200 px-2 rounded-full"
                onClick={() => handleQuantityChange(product.id, 1)}
              >
                +
              </button>
            </div>

            {/* Total for Product */}
            <div className="w-1/5 text-right">
              <span className="text-lg font-bold">
                ${(product.price * product.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary Section */}
      <div className="bg-gray-100 p-6 mt-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Cart Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>${shippingPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charge:</span>
            <span>${deliveryCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <span>Total:</span>
            <span>${(totalPrice + shippingPrice + deliveryCharge).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
