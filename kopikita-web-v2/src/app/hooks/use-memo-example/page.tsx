'use client'
import { useMemo, useState } from "react"

export default function UseMemoExample() {
    // compare antara menggunakan useMemo, dan useState biasa
    const [count, setCount] = useState<number>(0)
    const [trigger, setTrigger] = useState<number>(0) // untuk trigger rendering

    // case 1 : hitung angka besar (fibonacci)
    function fibonacci(n: number): number {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2)
    }

    console.time('Fibonacci tanpa useMemo')
    const resultNormalFib = fibonacci(35)
    console.timeEnd('Fibonacci tanpa useMemo')

    // menggunakan usememo
    const resultMemoFib = useMemo(() => {
        console.time('Fibonacci dengan useMemo')
        const res = fibonacci(35)
        console.timeEnd('Fibonacci dengan useMemo')
        return res
    }, [trigger])

    return (
        <div className="p-6 space-y-6 bg-gray-300 min-h-screen">
            <h1 className="text-2xl font-bold">useMemo Performance Demo</h1>
            <p className="text-gray-600">Coba klik tombol dibawah ini untuk memicu render ulang dan lihat perbedaan</p>

            {/* untuk trigger use memo */}
            <button
                onClick={() => setTrigger(trigger + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
            >Re-render (Trigger useMemo)</button>

            {/* untuk update count */}
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow"
            >Update count ({count})</button>

            {/* menampilkan result */}
            <div className="space-y-4 bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold">Hasil Perhitungan</h2>
                <p>Fibonacci (normal) : {resultNormalFib}</p>
                <p>Fibonacci (memo) : {resultMemoFib}</p>
            </div>
        </div>
    )
}
