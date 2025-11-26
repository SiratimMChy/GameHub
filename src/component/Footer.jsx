import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="w-full bg-[#232343] text-white pt-40 pb-10 px-6 relative">
            <div className="max-w-[900px] mx-auto -mt-55 overflow-hidden ">
                <div className="bg-linear-to-r from-gray-600 to-blue-100 p-1 rounded-2xl shadow-xl">
                    <div className="bg-linear-to-r from-blue-200 to-blue-100 rounded-2xl p-10 text-center">
                        <h2 className="text-2xl font-bold mb-2 text-[#131313]">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Get the latest updates and news right in your inbox!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 w-full text-black sm:w-[300px] rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-[#2677d3fb]"
                            />
                            <button className=" bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="max-w-[1100px] mx-auto text-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 text-center md:text-left">

                <div>
                    <h3 className="font-bold text-white mb-3">About Us</h3>
                    <p className="text-sm leading-relaxed">
                        Game Hub is your ultimate destination for discovering and exploring the latest games. We curate the best gaming experiences and provide comprehensive game reviews, ratings, and details to help you find your next favorite game.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-4 gap-2 text-sm">
                        <Link to="/"><li className="hover:text-blue-200 cursor-pointer">Home</li></Link>
                        <Link to="/allgames"><li className="hover:text-blue-200 cursor-pointer">All Games</li></Link>
                        <Link to="/popular"><li className="hover:text-blue-200 cursor-pointer">Popular Games</li></Link>
                    </ul>
                </div>


                <div>
                    <h3 className="font-bold text-white mb-3">Subscribe</h3>
                    <p className="text-sm mb-3">
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <div className="flex items-center justify-center md:justify-start">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-1.5 rounded-l-full border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-[#0077ff]"
                        />
                        <button className="bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold px-5 py-2 rounded-r-full hover:opacity-90 transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </footer>


            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
                ©2025 GameHub. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;