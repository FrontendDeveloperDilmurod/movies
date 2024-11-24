import React from 'react';
import facebook from '../assets/facebook_icon.png';
import instagram from '../assets/instagram_icon.png';
import twitter from '../assets/twitter_icon.png';
import youtube from '../assets/youtube_icon.png';

function Footer() {
    return (
        <div className="bg-black text-white py-12 mt-[2000px]">
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-8">
                <img src={facebook} alt="Facebook" className="w-8 h-8 cursor-pointer hover:opacity-75" />
                <img src={instagram} alt="Instagram" className="w-8 h-8 cursor-pointer hover:opacity-75" />
                <img src={twitter} alt="Twitter" className="w-8 h-8 cursor-pointer hover:opacity-75" />
                <img src={youtube} alt="YouTube" className="w-8 h-8 cursor-pointer hover:opacity-75" />
            </div>

            {/* Footer Links */}
            <div className="flex justify-center mb-8">
                <ul className="flex gap-6 text-sm md:gap-8">
                    <li className="cursor-pointer hover:underline">Audio Description</li>
                    <li className="cursor-pointer hover:underline">Help Center</li>
                    <li className="cursor-pointer hover:underline">Gift Cards</li>
                    <li className="cursor-pointer hover:underline">Media Center</li>
                    <li className="cursor-pointer hover:underline">Investor Relations</li>
                </ul>
            </div>

            {/* Footer Text */}
            <div className="text-sm text-center">
                <p>&copy; 2024 YourCompany. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
