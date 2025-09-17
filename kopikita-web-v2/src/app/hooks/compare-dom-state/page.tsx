'use client'
import { useState } from 'react'

export default function CompareDomState() {
    const [count, setCount] = useState<number>(0) // case 2 : menggunakan state
    const [toggle, setToggle] = useState<boolean>(false) // case 3 : tombol lampu
    const [text, setText] = useState<string>("") // case 4 : input teks

    // case 1 : DOM Manipulation langsung
    function handleDOMClick() {
        const domCount = document.getElementById('dom-count')
        if (domCount) {
            domCount.innerText = String(Number(domCount.innerText) + 1)
        }
    }

    // count tidak boleh negative
    function incrementCount() {
        setCount(count + 1)
    }

    function decrementCount() {
        if (count <= 0) {
            alert('Count cannot be negative')
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div className='p-6 space-y-8'>
            <h1 className='text-2xl font-bold'>DOM VS useState</h1>

            {/* Case 1 : counter feature dengan DOM */}
            <div className='p-4 border rounded'>
                <h2 className='font-semibold'>Case 1 : Counter DOM Manual</h2>
                <p id='dom-count'>0</p>
                <button
                    className='px-4 py-2 bg-blue-500 text-white rounded'
                    onClick={() => handleDOMClick()}
                >+ Tambah (pakai DOM)</button>
            </div>

            {/* Case 2 : counter feature dengan useState */}
            <div className='p-4 border rounded'>
                <h2 className='font-semibold'>Case 2 : Counter dengan useState</h2>
                <p>{count}</p>
                <div className='flex'>
                    <button
                        className='px-4 py-2 bg-green-500 text-white rounded'
                        onClick={() => incrementCount()}
                    >+ Tambah (pakai useState)</button>
                    <button
                        className='px-4 py-2 bg-red-500 text-white rounded'
                        onClick={() => decrementCount()}
                    >- Kurang (pakai useState)</button>
                </div>
            </div>

            {/* Case 3 : Toggle On/Off */}
            <div className={`p-4 border rounded ${!toggle ? 'bg-white' : 'bg-black'}`}>
                <h2 className={`font-semibold ${!toggle ? 'text-black' : 'text-white'}`}>Case 3 : Tombol On/Off</h2>
                <p className={`mb-2 ${!toggle ? 'text-black' : 'text-white'}`}>{toggle ? 'Lampu Mati' : 'Lampu Nyala'}</p>
                <button
                    onClick={() => setToggle(!toggle)}
                    className='px-4 py-2 bg-green-500 text-white rounded-lg'>
                    {toggle ? 'Hidupkan' : 'Matikan'}
                </button>
            </div>

            {/* Case 4 : Input Teks */}
            <div className='p-4 border rounded'>
                <h2 className='font-semibold'>Case 4 : Input Teks</h2>
                <input
                    type="text"
                    placeholder='Type something ...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='border p-2 rounded w-full mb-3 mt-5'
                />
                <p className='text-gray-700 mt-5'>You're typing : {text}</p>
            </div>
        </div>
    )
}
