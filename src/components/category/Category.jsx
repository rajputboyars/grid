import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const categories = [
    { id: 1, name: 'Category 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Category 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Category 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Category 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Category 5', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Category 6', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Category 7', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Category 8', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Category 9', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Category 10', imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Category 11', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Category 12', imageUrl: 'https://via.placeholder.com/150' },
];

const Category = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const categoryRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            categoryRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
        );
    }, []);

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section ref={categoryRef} className="py-8">
            <div className="container mx-auto px-4">
                {/* Search Bar */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search Categories..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Categories Grid */}
                <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10 gap-6">
                        {filteredCategories.map(category => (
                            <div
                                key={category.id}
                                className="bg-white rounded-md border p-2 hover:scale-105 transition duration-500 flex flex-col items-center"
                            >
                                <img
                                    src={category.imageUrl}
                                    alt={category.name}
                                    className="w-full h-32 object-cover  rounded-lg"
                                />
                                <div className=" text-center my-2">
                                    <h3 className=" font-semibold">{category.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
