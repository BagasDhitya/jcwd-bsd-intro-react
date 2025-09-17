'use client'

import { useState, useRef } from 'react'

export default function UseRefExample() {
    // compare antara use state dengan use ref
    const [countState, setCountState] = useState<number>(0)
    const [trigger, setTrigger] = useState<boolean>(false)
    const countRef = useRef(0)

    function displayCountRef() {
        countRef.current += 1
        alert(`Ref count sekarang : ${countRef.current}`)
    }

    return (
        <div className='min-h-screen bg-gray-300 flex flex-col items-center py-10 space-y-10'>
            <h1 className='text-3xl font-bold text-gray-800'>Contoh use Ref</h1>

            {/* Compare between state vs ref */}
            <div className='bg-white shadow-lg rounded-2xl p-6 w-96 text-center'>
                <h2 className='text-xl font-semibold mb-4'>Counter State VS Ref</h2>
                <p className='mb-2'>State Count : {countState}</p>
                <p className='mb-2'>Ref Count (tidak rendering ulang) : {countRef.current}</p>
                <div className='grid grid-cols-2'>
                    <button
                        className='px-4 py-2 bg-blue-500 text-white rounded-lg m-1'
                        onClick={() => setCountState(countState + 1)}
                    >+ State
                    </button>
                    <button
                        className='px-4 py-2 bg-blue-500 text-white rounded-lg m-1'
                        onClick={() => displayCountRef()}
                    >
                        + Ref
                    </button>
                    <button
                        className='w-full px-4 py-2 bg-yellow-500 text-black rounded-lg m-1'
                        onClick={() => setTrigger(!trigger)}
                    >
                        Trigger hasil count dari Ref
                    </button>
                </div>

            </div>
        </div>
    )
}
