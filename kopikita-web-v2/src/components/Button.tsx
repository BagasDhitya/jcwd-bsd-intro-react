'use client'
import React from 'react'

interface IButton {
    label: string,
    onClick: () => void,
    variant?: 'primary' | 'secondary'
}

export default function Button({ label, onClick, variant = 'primary' }: IButton) {

    const baseStyle = 'cursor-pointer px-4 py-2 rounded-lg font-semibold transition-colors duration-200'
    let styles: string

    if (variant === 'primary') {
        styles = 'bg-yellow-600 text-white hover:bg-yellow-700'
    } else {
        styles = 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }

    return (
        <button
            className={`${baseStyle} ${styles}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
