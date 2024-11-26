import React, { useEffect } from 'react';
import hero_banner from '../assets/hero_banner.jpg';
import hero_title from '../assets/hero_title.png';
import play_icon from '../assets/play_icon.png';
import info_icon from '../assets/info_icon.png';
import TitleCards from '../components/TitleCards';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

function Home() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: true, // Trigger animation only once when the element is visible
        });
    }, []);

    return (
        <div>
            <div className='container mx-auto'>
                <div className="relative w-full h-screen">
                    {/* Hero Sektsiya */}
                    <div className="relative">
                        {/* Banner tasviri */}
                        <img
                            src={hero_banner}
                            alt="Hero Banner"
                            className="w-full h-[100vh] object-cover"
                            data-aos="fade-up"  // AOS animation effect
                        />
                        {/* Banner ustidagi elementlar */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                            {/* Hero title tasviri */}
                            <img
                                src={hero_title}
                                alt="Hero Title"
                                className="mb-6 w-[70%] md:w-[50%]"
                                data-aos="zoom-in"  // AOS animation effect
                            />
                            {/* Tugmalar */}
                            <div className="flex gap-4 pb-12">
                                {/* Play tugmasi */}
                                <button
                                    className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-black bg-white rounded-md shadow-md hover:bg-gray-200"
                                    data-aos="fade-left"  // AOS animation effect
                                >
                                    <img src={play_icon} alt="Play" className="w-6" />
                                    Play
                                </button>
                                {/* More Info tugmasi */}
                                <button
                                    className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-gray-600 rounded-md shadow-md hover:bg-gray-500"
                                    data-aos="fade-right"  // AOS animation effect
                                >
                                    <img src={info_icon} alt="Info" className="w-6" />
                                    More Info
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Animated TitleCards */}
                    <div>
                        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
                        <TitleCards title={"Only on Netflix"} category={"popular"} />
                        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
                        <TitleCards title={"Top Pics for you"} category={"now_playing"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
