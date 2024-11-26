import React, { useState } from 'react';
import logo from '../assets/logo.png';
import background_banner from '../assets/background_banner.jpg';

function Login() {
    const [signState, setSignState] = useState("Sign In");;
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-center bg-cover"
            style={{ backgroundImage: `url(${background_banner})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
            <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg opacity-90">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="w-24" />
                </div>
                {/* Heading */}
                <h1 className="mb-6 text-3xl font-semibold text-center text-white">Sign up</h1>
                {/* Form */}
                <form className="space-y-4">
                    {/* <h1>  {signState}</h1> */}
                    <input required
                        type="text"
                        placeholder="Your name"
                        className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input required
                        type="email"
                        placeholder="Your email"
                        className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input required
                        type="password"
                        placeholder="Your password"
                        className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 font-semibold text-white transition duration-200 bg-red-600 rounded-md hover:bg-red-700"
                    >
                        Sign up
                    </button>
                </form>
                {/* Remember Me Checkbox */}
                <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 text-red-600 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
                </div>
                {/* Help Link */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-red-600 cursor-pointer hover:underline">Need help?</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
