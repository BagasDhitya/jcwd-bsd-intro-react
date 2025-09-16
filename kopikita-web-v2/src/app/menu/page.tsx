'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import CoffeCard from '@/components/Card'
import coffeData from '@/dummy/coffe.json'

export default function Menu() {
    const router = useRouter()

    function handleDetail(id: number) {
        router.push(`/detail/${id}`)
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            <div className='max-w-6xl mx-auto px-4 py-12'>
                <h1 className='text-3xl md:text-4xl font-bold text-center mb-8'>Our Coffe Menu</h1>

                {/* mapping data coffe */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {
                        coffeData.map((coffe, key) => (
                            <CoffeCard
                                key={key}
                                id={coffe.id}
                                title={coffe.title}
                                image={coffe.image}
                                description={coffe.description}
                                price={coffe.price}
                                onDetail={handleDetail}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
