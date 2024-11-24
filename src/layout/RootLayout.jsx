import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

function RootLayout() {
    return (
        <div>
            <div>
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default RootLayout