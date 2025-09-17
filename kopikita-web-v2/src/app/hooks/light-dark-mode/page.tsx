// app/light-dark/page.tsx (Next.js App Router)

"use client"

import { useState } from "react"

export default function LightDarkPage() {
    const [darkMode, setDarkMode] = useState(false)

    function toggleMode() {
        setDarkMode(!darkMode)
    }

    const baseStyle = `min-h-screen flex flex-col items-center justify-center transition-colors duration-500`

    return (
        <div
            className={`${baseStyle} ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
        >
            <h1 className="text-3xl font-bold mb-6">
                {darkMode ? "Dark Mode" : "Light Mode"}
            </h1>

            <button
                onClick={toggleMode}
                className="p-3 rounded-full border hover:scale-110 transition"
            >
                {darkMode ? (
                    // Icon Matahari
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <g stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </g>
                    </svg>
                ) : (
                    // Icon Bulan
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21 12.79A9 9 0 0 1 11.21 3c0-.34 0-.67.05-1A10 10 0 1 0 22 13c-.33.05-.66.05-1 .05z" />
                    </svg>
                )}
            </button>
        </div>
    )
}
