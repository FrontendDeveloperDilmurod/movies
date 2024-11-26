import React from 'react';

function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
            {/* Matn */}
            <p className="mt-4 text-lg font-medium text-blue-700">Loading...</p>
        </div>
    );
}

export default Loading;
