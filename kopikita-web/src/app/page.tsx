import Link from "next/link"

export default function Home() {
  return (
    <main className='landing'>
      <div className='landing-content'>
        <h1 style={{ color: 'brown' }}>Welcome to KopiKita</h1>
        <p>Your favorite place for authentic coffe experience.</p>
        <div className='landing-buttons'>

          {/* direct ke halaman menu */}
          <Link href={'/menu'}>See Menu</Link>
        </div>
      </div>
    </main>
  )
}
