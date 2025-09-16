'use client'
import React from 'react'
import Button from './Button'

interface ICoffeCard {
    id: number,
    title: string,
    image: string,
    price: number,
    description: string,
    onDetail?: (id: number) => void
}

export default function CoffeCard({ id, title, image, price, description, onDetail }: ICoffeCard) {
    return (
        <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            <img className='h-48 w-full object-cover' src={image} alt={title} />
            <div className='p-4 space-y-2'>
                <h3 className='text-lg font-bold'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
                <p className='text-brown-700 font-semibold'>Rp {price.toLocaleString()}</p>
                <Button
                    label='See Detail'
                    variant='primary'
                    onClick={() => onDetail?.(id)}
                />
            </div>
        </div>
    )
}
