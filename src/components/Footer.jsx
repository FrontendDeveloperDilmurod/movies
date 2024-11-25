import React from 'react';
import facebook from '../assets/facebook_icon.png';
import instagram from '../assets/instagram_icon.png';
import twitter from '../assets/twitter_icon.png';
import youtube from '../assets/youtube_icon.png';

function Footer() {
    return (
        <div className="container px-4 py-12 mx-auto text-white bg-black mt-[2200px]">
            {/* Social Media Icons */}
            <div className="flex justify-center mt-[-100px] gap-4 mb-8 sm:gap-6">
                <img src={facebook} alt="Facebook" className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8 hover:opacity-75" />
                <img src={instagram} alt="Instagram" className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8 hover:opacity-75" />
                <img src={twitter} alt="Twitter" className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8 hover:opacity-75" />
                <img src={youtube} alt="YouTube" className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8 hover:opacity-75" />
            </div>

            {/* Footer Links */}
            <div className="flex justify-center mb-8">
                <ul className="flex flex-wrap gap-4 text-xs sm:text-sm sm:gap-6 lg:gap-8">
                    <li className="cursor-pointer hover:underline">Audio Description</li>
                    <li className="cursor-pointer hover:underline">Help Center</li>
                    <li className="cursor-pointer hover:underline">Gift Cards</li>
                    <li className="cursor-pointer hover:underline">Media Center</li>
                    <li className="cursor-pointer hover:underline">Investor Relations</li>
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
