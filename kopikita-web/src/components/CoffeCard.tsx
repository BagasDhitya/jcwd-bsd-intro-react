'use client'
import React from 'react'

export interface ICoffeCard {
    image: string,
    name: string,
    price: string,
    description: string
}

export default function CoffeCard({ image, name, price, description }: ICoffeCard) {
    return (
        <div className='card'>
            <img src={image} alt={name} className='card-img' />
            <h2>{name}</h2>
            <p className='card-price'>{price}</p>
            <p>{description}</p>
            <button className='card-btn' onClick={() => alert(`Ordering ${name} ...`)}>Order Now</button>
        </div>
    )
}
