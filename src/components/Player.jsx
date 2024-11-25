import React from 'react';
import { useNavigate } from 'react-router-dom';
import back_arrow_icon from '../assets/back_arrow_icon.png';

function Player() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-screen p-4 space-y-6 bg-gray-100">
            {/* Back Arrow Button */}
            <button
                onClick={goBack}
                className="absolute p-3 transition-all duration-300 ease-out bg-black rounded-full shadow-lg top-4 left-4 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                <img src={back_arrow_icon} alt="Back" className="w-6 h-6" />
            </button>

            {/* YouTube Embed Video Player */}
            <div className="w-full max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg">
                <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube.com/embed/rN3h4mxSFmU?list=RD1ljZ93pfs-Q&index=2"
                    title="mp3"
                    allowFullScreen
                    frameBorder="0"
                    className="rounded-t-lg"
                ></iframe>
            </div>

            {/* Song Details */}
            <div className="w-full max-w-md p-6 text-center bg-white rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800">Song Title</h4>
                <h6 className="mt-2 text-lg text-gray-600">Artist Name</h6>
                <h6 className="mt-1 text-lg text-gray-600">Album Name</h6>
            </div>
        </div>
    );
}

export default Player;
