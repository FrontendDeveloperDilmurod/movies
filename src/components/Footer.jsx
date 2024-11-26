import React from 'react';
import facebook from '../assets/facebook_icon.png';
import instagram from '../assets/instagram_icon.png';
import twitter from '../assets/twitter_icon.png';
import youtube from '../assets/youtube_icon.png';

function Footer() {
    return (
        <div className="container px-4 py-12 mx-auto text-white bg-black mt-[1900px]">
            {/* Social Media Icons */}
            <div className="flex justify-center mt-[-100px] gap-4 mb-8 sm:gap-6">
                <img
                    src={facebook}
                    alt="Facebook"
                    className="w-6 h-6 transition-all duration-300 transform cursor-pointer sm:w-8 sm:h-8 hover:opacity-75 hover:scale-110"
                />
                <img
                    src={instagram}
                    alt="Instagram"
                    className="w-6 h-6 transition-all duration-300 transform cursor-pointer sm:w-8 sm:h-8 hover:opacity-75 hover:scale-110"
                />
                <img
                    src={twitter}
                    alt="Twitter"
                    className="w-6 h-6 transition-all duration-300 transform cursor-pointer sm:w-8 sm:h-8 hover:opacity-75 hover:scale-110"
                />
                <img
                    src={youtube}
                    alt="YouTube"
                    className="w-6 h-6 transition-all duration-300 transform cursor-pointer sm:w-8 sm:h-8 hover:opacity-75 hover:scale-110"
                />
            </div>

            {/* Footer Links */}
            <div className="flex justify-center mb-8">
                <ul className="flex flex-wrap gap-4 text-xs sm:text-sm sm:gap-6 lg:gap-8">
                    <li className="transition-all duration-300 transform cursor-pointer hover:underline hover:text-gray-400">Audio Description</li>
                    <li className="transition-all duration-300 transform cursor-pointer hover:underline hover:text-gray-400">Help Center</li>
                    <li className="transition-all duration-300 transform cursor-pointer hover:underline hover:text-gray-400">Gift Cards</li>
                    <li className="transition-all duration-300 transform cursor-pointer hover:underline hover:text-gray-400">Media Center</li>
                    <li className="transition-all duration-300 transform cursor-pointer hover:underline hover:text-gray-400">Investor Relations</li>
                </ul>
            </div>

            {/* Footer Text */}
            <div className="text-xs text-center sm:text-sm">
                <p>&copy; 2024 YourCompany. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
