'use client'

import { useState, useEffect } from 'react'

export default function UseEffectExample() {
    const [count, setCount] = useState<number>(0)
    const [show, setShow] = useState<boolean>(true)

    // fase mounting -> hanya dijalankan sekali
    useEffect(() => {
        console.log("Komponen pertama kali muncul (mounting) ...")
    }, [])

    // fase updating -> dieksekusi setiap kali state 'count' berubah
    useEffect(() => {
        if (count > 0) {
            console.log(`Count berubah jadi ${count}`)
        }
    }, [count]) // array dependencies

    // fase unmounting -> jalan ketika komponen hilang
    useEffect(() => {
        return () => {
            console.log('Komponen dihapus (unmounting) ...')
        }
    }, [])


    return (
        <div className='min-h-screen bg-gray-300 flex flex-col items-center py-10 space-y-10'>
            <h1 className='text-3xl font-bold text-gray-800'>Life Cycle Component</h1>

            {/* Case 1 : Mounting Phase */}
            <div className='bg-white shadow-lg rounded-2xl p-6 w-96 text-center'>
                <h2 className='text-xl font-semibold mb-4'>1. Mounting</h2>
                <p className='text-gray-700'>Lihat console - pesan muncul saat komponen pertama kali render.</p>
            </div>

            {/* Case 2 : Updating Phase */}
            <div className='bg-white shadow-lg rounded-2xl p-6 w-96 text-center'>
                <h2 className='text-xl font-semibold mb-4'>2. Updating</h2>
                <div className='flex justify-center items-center space-x-10'>
                    <button
                        className='p-2 rounded bg-green-500 text-white font-semibold'
                        onClick={() => setCount(count + 1)}
                    >Updating Count
                    </button>
                    <p className='text-gray-700'>{count}</p>
                </div>
            </div>

            {/* Case 3 : Unmounting Phase */}
            <div className='bg-white shadow-lg rounded-2xl p-6 w-96 text-center'>
                <h2 className='text-xl font-semibold mb-4'>3. Unmounting</h2>
                {
                    show && (<ChildComponent />)
                }
                <button
                    onClick={() => setShow(!show)}
                    className='px-4 py-2 bg-red-500 text-white rounded-lg mt-3'
                >
                    {show ? 'Hapus Child Component' : 'Tampilkan Child Component'}
                </button>
            </div>
        </div>
    )

    function ChildComponent() {
        useEffect(() => {
            console.log('Child Mount')
            return () => {
                console.log('Child Unmount')
            }
        }, [])

        return <p>I'm child component!</p>
    }
}
