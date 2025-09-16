import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen p-8 space-y-12'>

      {/* Contoh width di tailwind */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Width Examples</h2>
        <div className='flex gap-4'>
          <div className='bg-blue-500 text-white w-20 p-2 text-center'>w-20</div>
          <div className='bg-green-500 text-white w-40 p-2 text-center'>w-40</div>
          <div className='bg-red-500 text-white w-1/2 p-2 text-center'>w-1/2</div>
          <div className='bg-purple-500 text-white w-full p-2 text-center'>w-full</div>
        </div>
        <div className='flex gap-10 m-5'>
          <div className='bg-yellow-500 text-black w-1/2 p-2 text-center'>left side</div>
          <div className='bg-orange-500 text-white w-1/2 p-2 text-center'>right side</div>
        </div>
      </section>

      {/* Contoh height di tailwind */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Height Examples</h2>
        <div className='flex gap-4 items-end'>
          <div className='bg-blue-500 text-white h-12 w-20 text-center'>h-12</div>
          <div className='bg-green-500 text-white h-24 w-20 text-center'>h-24</div>
          <div className='bg-red-500 text-white h-40 w-20 text-center'>h-40</div>
          <div className='bg-purple-500 text-white h-60 w-20 text-center'>h-60</div>
        </div>
      </section>

      {/* margin -> jarak antar kontainer */}
      {/* Contoh margin di tailwind */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Margin Examples</h2>
        <div className='bg-blue-100 p-2'>
          <div className='bg-blue-500 text-white m-2 p-2'>m-2</div>
          <div className='bg-green-500 text-white mx-4 p-2'>mx-4</div>
          <div className='bg-red-500 text-white my-6 p-2'>my-6</div>
        </div>
      </section>

      {/* padding -> jarak antar elemen di dalam kontainer */}
      {/* Contoh padding di tailwind */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Padding Examples</h2>
        <div className='flex flex-wrap gap-4'>
          <div className='bg-blue-500 text-white p-2'>p-2</div>
          <div className='bg-green-500 text-white px-6'>px-6</div>
          <div className='bg-red-500 text-white py-8'>py-8</div>
          <div className='bg-purple-500 text-white pt-10'>pt-10</div>
        </div>
      </section>

      {/* Contoh background di tailwind */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Background Examples</h2>
        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-blue-500 text-white p-4 rounded'>bg-blue-500</div>
          <div className='bg-gradient-to-l from-pink-500 to-yellow-500 text-white p-4 rounded'>gradient</div>
          <div className='bg-[url("https://i.pinimg.com/736x/cd/c1/4e/cdc14ed21cb89833a5256fc4624878a3.jpg")] h-full bg-contain bg-center text-white p-4 rounded'>background image</div>
          <div className='bg-transparent border-dotted border-4 border-red-500 p-4 rounded'>bg-transparent</div>
        </div>
      </section>

      {/* Contoh positioning di tailwind */}
      <section className='relative h-40 border border-gray-400'>
        <h2 className='text-2xl font-bold mb-4'>Position Examples</h2>
        <div className='absolute top-2 left-2 bg-blue-500 text-white p-2'>absolute</div>
        <div className='relative top-8 left-8 bg-green-500 text-white p-2'>relative</div>
        <div className='fixed w-full top-0 right-0 bg-red-500 text-white p-2'>fixed navbar</div>
        <div className='sticky top-0 right-0 bg-purple-500 text-white p-2'>sticky navbar</div>
      </section>

      {/* Contoh flexbox di tailwind */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Flexbox Examples</h2>
        <div className='flex gap-4'>
          <div className='flex-1 bg-blue-500 text-white p-4 text-center'>flex-1</div>
          <div className='flex-1 bg-blue-500 text-white p-4 text-center'>flex-1</div>
          <div className='flex-1 bg-blue-500 text-white p-4 text-center'>flex-1</div>
        </div>
        <div className='flex mt-4 bg-gray-100 p-2 justify-start'>
          <div className='bg-blue-400 text-white p-2'>item 1</div>
          <div className='bg-green-400 text-white p-2'>item 2</div>
          <div className='bg-red-400 text-white p-2'>item 3</div>
        </div>
        <div className='flex mt-4 bg-gray-100 p-2 justify-between'>
          <div className='bg-blue-400 text-white p-2'>item 1</div>
          <div className='bg-green-400 text-white p-2'>item 2</div>
          <div className='bg-red-400 text-white p-2'>item 3</div>
        </div>
        <div className='flex mt-4 bg-gray-100 p-2 justify-evenly'>
          <div className='bg-blue-400 text-white p-2'>item 1</div>
          <div className='bg-green-400 text-white p-2'>item 2</div>
          <div className='bg-red-400 text-white p-2'>item 3</div>
        </div>
        <div className='flex mt-4 bg-gray-100 p-2 justify-center'>
          <div className='bg-blue-400 text-white p-2'>item 1</div>
          <div className='bg-green-400 text-white p-2'>item 2</div>
          <div className='bg-red-400 text-white p-2'>item 3</div>
        </div>
        <div className='flex mt-4 bg-gray-100 p-2 justify-end'>
          <div className='bg-blue-400 text-white p-2'>item 1</div>
          <div className='bg-green-400 text-white p-2'>item 2</div>
          <div className='bg-red-400 text-white p-2'>item 3</div>
        </div>

        {/* Combine justify right and left */}
        <div className='flex flex-col bg-slate-300 mt-4'>
          <h2 className='text-2xl font-bold mb-4'>Combine Justify Right and Left Examples</h2>
          <div className='flex justify-between'>
            <div className='flex'>
              <div className='bg-blue-400 text-white p-2'>item 1</div>
              <div className='bg-green-400 text-white p-2'>item 2</div>
              <div className='bg-red-400 text-white p-2'>item 3</div>
            </div>
            <div className='flex'>
              <div className='bg-blue-400 text-white p-2'>item 1</div>
              <div className='bg-green-400 text-white p-2'>item 2</div>
              <div className='bg-red-400 text-white p-2'>item 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsivity di tailwind */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Responsivity Examples</h2>
        <p className='mb-4 text-gray-600'>Resize browser untuk lihat perubahan styling di smartphone (sm), tablet(md) dan desktop(lg)</p>

        {/* 1. Text Size Responsive */}
        <div className='bg-blue-500 text-white p-4 rounded mb-4 text-base sm:text-lg md:text-xl lg:text-2xl
        sm:bg-red-500 md:bg-orange-500 lg:bg-cyan-500'>
          Text Responsive (sm - md - lg)
        </div>

        {/* 2. Grid Layout Responsive */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <div className='bg-blue-400 text-white p-4 text-center rounded'>Item 1</div>
          <div className='bg-green-400 text-white p-4 text-center rounded'>Item 2</div>
          <div className='bg-red-400 text-white p-3 text-center rounded'>Item 3</div>
          <div className='bg-purple-400 text-white p-4 text-center rounded'>Item 4</div>
        </div>
      </section>
    </div>
  )
}
