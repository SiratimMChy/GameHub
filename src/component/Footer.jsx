import React from 'react';

const Footer = () => {
    return (
        <div className="w-full bg-[#0B0B1A] text-white pt-45 pb-10 px-6 relative">
            <div className="max-w-[900px] mx-auto -mt-55 overflow-hidden ">
                <div className="bg-[linear-gradient(180deg,rgba(19,19,19,0.1)_0%,rgba(19,19,19,0.15)_25%,rgba(19,19,19,0.4)_60%,rgba(19,19,19,0.7)_100%)] p-1 rounded-2xl shadow-xl">
                    <div className="bg-[linear-gradient(135deg,#FFFEE0_0%,#F9FFB0_40%,#FFFFFF_100%)] rounded-2xl p-10 text-center">
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
                                className="px-4 py-3 w-full text-black sm:w-[300px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                            />
                            <button className="bg-linear-to-r from-[#FFB347] via-[#FFD700] to-[#E7FE29] text-black font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="max-w-[1100px] mx-auto text-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10 mt-28 text-center md:text-left">
                {/* About */}
                <div>
                    <h3 className="font-bold text-white mb-3">About Us</h3>
                    <p className="text-sm leading-relaxed">
                        We are a passionate team dedicated to providing the best services to
                        our customers.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="font-bold text-white mb-3">Subscribe</h3>
                    <p className="text-sm mb-3">
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <div className="flex items-center justify-center md:justify-start">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 rounded-l-full border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                        />
                        <button className="bg-linear-to-r from-[#FFB347] via-[#FFD700] to-[#E7FE29] text-black font-semibold px-5 py-2 rounded-r-full hover:opacity-90 transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </footer>

            {/* Bottom Bar */}
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
                ©2024 Your Company. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;